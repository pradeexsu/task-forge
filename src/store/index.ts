import { create } from 'zustand';
import { AuthStore, Store, TaskInfo } from '../typeings';

export const useTaskStore = create<Store>()((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [task, ...state.tasks] })),
  deleteTask: (id: string) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task?.id !== id) })),
  updateTask: (updatedTask: TaskInfo) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task?.id !== updatedTask?.id ? task : updatedTask
      ),
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
