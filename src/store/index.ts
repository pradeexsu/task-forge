import { create } from 'zustand';
import { AuthStore, TaskStore } from '../typings';
import { Task } from '../modules/Axios/typings';

export const useTaskStore = create<TaskStore>()((set) => ({
  tasks: [],
  modalContent: undefined,
  deleteId: undefined,
  setDeleteId: (deleteId) => set({ deleteId }),
  updateTaskValue: undefined,
  setUpdateTaskValue: (updateTaskValue) => set({ updateTaskValue }),

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

export type AuthStore = {
  token?: string;
  isAuthenticated?: boolean;
  userMetaData?: UserMetaData;
  modalContent: ReactNode;
  authenticate: () => void;
  unAuthenticate: () => void;
  setToken: (token: string) => void;
  setModalContent: (jsx: ReactNode) => void;
  setUserMetaData: (metaData?: UserMetaData) => void;
};

export const useAuthStore = create<AuthStore>()((set) => ({
  user: undefined,
  token: undefined,
  isAuthenticated: false,
  userMetaData: undefined,
  modalContent: undefined,
  setModalContent: (modalContent) => set({ modalContent }),
  updateUserMetaData: () => {},
  setToken: (token) => set({ token }),
  logout: () => set({ isAuthenticated: false }),
  authenticate: () => set({ isAuthenticated: true }),
  unAuthenticate: () => set({ isAuthenticated: false }),
  setUserMetaData: (userMetaData) => set({ userMetaData }),
}));
