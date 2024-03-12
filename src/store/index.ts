import { create } from 'zustand';
import { AuthStore, TaskStore } from '../typings';
import { Task } from '../service/typings';

export const useTaskStore = create<TaskStore>()((set) => ({
  tasks: [],
  modalContent: undefined,
  setModalContent: (modalContent) => set({ modalContent }),
  addTask: (task) => set((state) => ({ tasks: [task, ...state.tasks] })),
  deleteTask: (id: string) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task?.id !== id) })),
  updateTask: (updatedTask: Task) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task?.id !== updatedTask?.id ? task : updatedTask
      ),
    })),
  setTasks: (tasks: Task[]) =>
    set(() => ({
      tasks,
    })),
}));

export const useAuthStore = create<AuthStore>()((set) => ({
  user: undefined,
  token: undefined,
  isAuthenticated: false,
  userMetaData: undefined,
  updateUserMetaData: () => {},
  setToken: (token) => set({ token }),
  logout: () => set({ isAuthenticated: false }),
  authenticate: () => set({ isAuthenticated: true }),
  unAuthenticate: () => set({ isAuthenticated: false }),
  setUserMetaData: (userMetaData) => set({ userMetaData }),
}));
