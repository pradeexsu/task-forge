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
