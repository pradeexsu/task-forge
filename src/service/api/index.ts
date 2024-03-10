import { AxiosResponse } from 'axios';
import { axiosInstance } from '../axios-instance';

export async function getTasks() {
  const { data } = (await axiosInstance.get('tasks')) as AxiosResponse<unknown>;
  return data;
}
