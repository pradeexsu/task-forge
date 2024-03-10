export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
};

export type UserMetaData = Partial<{
  username: string;
  email: string;
  id: string;
}>;

export type TaskListData = {
  taskList: Task[];
};

export type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
};
