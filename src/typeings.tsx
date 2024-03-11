import { HTMLProps } from 'react';

export type ClassNameType = HTMLProps<HTMLElement>['className'];

export type BadgeVariant = 'badge-accent' | 'badge-info' | 'badge-success';

export type TaskStatus = 'DONE' | 'IN_PROGRESS' | 'TODO';

export type ButtonVarient =
  | 'btn-accent'
  | 'btn-info'
  | 'btn-success'
  | 'btn-primary'
  | 'btn-error';

export type TaskInfo = {
  title: string;
  description?: string;
  status: TaskStatus;
  id: string;
};

export type Store = {
  tasks: TaskInfo[];
  addTask: (task: TaskInfo) => void;
  deleteTask: (id: string) => void;
  updateTask: (task: TaskInfo) => void;
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
