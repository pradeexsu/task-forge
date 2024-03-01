import { HTMLProps } from 'react';

export type ClassNameType = HTMLProps<HTMLElement>['className'];
export type BadgeVariant = 'success' | 'danger' | 'warning' | 'info';

export type TaskStatus = 'done' | 'inprogress' | 'todo' | 'deffered';

export type TaskInfo = {
  task?: string;
  description?: string;
  status?: TaskStatus;
  id: string;
};

export type Store = {
  tasks: TaskInfo[];
  addTask: (task: TaskInfo) => void;
  deleteTask: (id: string) => void;
  updateTask: (task: TaskInfo) => void;
};
