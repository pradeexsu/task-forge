export type TaskListData = {
  taskList: Task[];
};

export type Task = Partial<{
  id: string;
  title: string;
  description: string;
  status: string;
}>;
