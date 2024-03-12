import { axiosInstance } from '../axios-instance';
import { COMMON_ERROR } from '../const';
import { ApiResponse, Task, TaskListData } from '../typings';

export async function getTasks() {
  let data: ApiResponse<TaskListData>;
  try {
    const response = await axiosInstance.get<ApiResponse<TaskListData>>(
      'tasks'
    );
    data = response?.data;
  } catch (error) {
    data = COMMON_ERROR;
  }
  return data;
}

export async function postTask(task: Task) {
  try {
    const response = await axiosInstance.post<ApiResponse<Task>>('tasks', task);
    return response?.data;
  } catch (error) {
    return COMMON_ERROR;
  }
}

export async function patchTask(task: Task) {
  try {
    const response = await axiosInstance.patch<ApiResponse>(
      `tasks/${task?.id}`,
      task
    );
    return response?.data;
  } catch (error) {
    return COMMON_ERROR;
  }
}

export async function deleteTask(id: string) {
  try {
    const response = await axiosInstance.delete<ApiResponse>(`tasks/${id}`);
    return response?.data;
  } catch (error) {
    return COMMON_ERROR;
  }
}
