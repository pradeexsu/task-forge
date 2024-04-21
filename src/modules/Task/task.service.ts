import { axiosInstance } from '../Axios/axios.instance';
import { COMMON_ERROR } from '../Axios/const';
import { ApiResponse } from '../Axios/typings';
import { NotificationService } from '../Notification';
import { Task, TaskListData } from './typings';

export default class TaskService extends NotificationService {
  constructor() {
    super();
  }
  protected async getTasks(): Promise<ApiResponse<TaskListData>> {
    try {
      const response =
        await axiosInstance.get<ApiResponse<TaskListData>>('tasks');
      return response.data;
    } catch (error) {
      return COMMON_ERROR;
    }
  }

  protected async postTask(task: Task): Promise<ApiResponse<Task>> {
    try {
      const response = await axiosInstance.post<ApiResponse<Task>>(
        'tasks',
        task,
      );
      return response.data;
    } catch (error) {
      return COMMON_ERROR;
    }
  }

  protected async patchTask(task: Task): Promise<ApiResponse> {
    try {
      const response = await axiosInstance.patch<ApiResponse>(
        `tasks/${task?.id}`,
        task,
      );
      return response.data;
    } catch (error) {
      return COMMON_ERROR;
    }
  }

  protected async deleteTask(id: string): Promise<ApiResponse> {
    try {
      const response = await axiosInstance.delete<ApiResponse>(`tasks/${id}`);
      return response.data;
    } catch (error) {
      return COMMON_ERROR;
    }
  }
}
