import { axiosAuthInstance } from '../axios-instance';
import { AuthCred } from '../../typings';
import { ApiResponse, UserMetaData } from '../typings';
import { AxiosResponse } from 'axios';

export async function login(cred: AuthCred) {
  try {
    const { data } = (await axiosAuthInstance.post(
      'login',
      cred
    )) as AxiosResponse<ApiResponse<UserMetaData>>;
    return data;
  } catch (error) {
    console.error(error);
    return {
      message: 'Something went wrong',
      success: false,
    };
  }
}

export async function signup(cred: AuthCred) {
  try {
    const { data } = await axiosAuthInstance.post<ApiResponse<UserMetaData>>(
      'signup',
      cred
    );
    return data;
  } catch (error) {
    return {
      message: 'Something went wrong',
      success: false,
    };
  }
}
