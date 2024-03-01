import { create } from 'zustand';
import { Store, TaskInfo } from '../typeings';

export const useStore = create<Store>()((set) => ({
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
