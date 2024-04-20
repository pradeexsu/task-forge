import { HTMLProps, ReactNode } from 'react';

export type ClassNameType = HTMLProps<HTMLElement>['className'];

export type BadgeVariant =
  | 'badge-accent'
  | 'badge-info'
  | 'badge-success'
  | 'badge-warning';

export type TaskStatus = 'DONE' | 'IN_PROGRESS' | 'OPEN';

export type ButtonVarient =
  | 'btn-accent'
  | 'btn-info'
  | 'btn-success'
  | 'btn-primary'
  | 'btn-secondary'
  | 'btn-warning'
  | 'btn-default'
  | 'btn-error';

export type TaskStore = {
  tasks: Task[];
  deleteId: string | undefined;
  setDeleteId: (id?: string) => void;
  updateTaskValue: Task | undefined;
  setUpdateTaskValue: (task?: Task) => void;
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
  modalContent: ReactNode;
  authenticate: () => void;
  unAuthenticate: () => void;
  setToken: (token: string) => void;
  setModalContent: (jsx: ReactNode) => void;
  setUserMetaData: (metaData?: UserMetaData) => void;
};
