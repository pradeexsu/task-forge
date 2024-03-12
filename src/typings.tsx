import { HTMLProps, ReactNode } from 'react';
import { Task } from './service/typings';

export type ClassNameType = HTMLProps<HTMLElement>['className'];

export type BadgeVariant = 'badge-accent' | 'badge-info' | 'badge-success';

export type TaskStatus = 'DONE' | 'IN_PROGRESS' | 'OPEN';

export type ButtonVarient =
  | 'btn-accent'
  | 'btn-info'
  | 'btn-success'
  | 'btn-primary'
  | 'btn-secondary'
  | 'btn-default'
  | 'btn-error';

export type TaskStore = {
  tasks: Task[];
  modalContent: ReactNode;
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  updateTask: (task: Task) => void;
  setTasks: (tasks: Task[]) => void;
  setModalContent: (jsx: ReactNode) => void;
};

export type AuthCred = {
  email?: string;
  password?: string;
  username?: string;
};

export type UserMetaData = Partial<{
  username: string;
  email: string;
  id: string;
}>;

export type AuthStore = {
  token?: string;
  isAuthenticated?: boolean;
  userMetaData?: UserMetaData;
  authenticate: () => void;
  unAuthenticate: () => void;
  setToken: (token: string) => void;
  setUserMetaData: (metaData?: UserMetaData) => void;
};
