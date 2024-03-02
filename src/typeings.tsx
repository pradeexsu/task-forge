import { HTMLProps } from 'react';

export type ClassNameType = HTMLProps<HTMLElement>['className'];
export type BadgeVariant =
  | 'default'
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'ghost'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

export type TaskStatus = 'done' | 'inprogress' | 'todo' | 'deffered';

export type ButtonVarient =
  | ''
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'none'
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'ghost'
  | 'link';

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
