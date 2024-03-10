import { axiosAuthInstance } from '../axios-instance';
import { AuthCred } from '../../typeings';
import { ApiResponse, UserMetaData } from './typeings';
import {
  AxiosResponse,
  AxiosResponseHeaders,
  RawAxiosResponseHeaders,
} from 'axios';

export async function login(cred: AuthCred) {
  try {
    console.log('cred:', cred);
    const { data, headers } = (await axiosAuthInstance.post(
      'login',
      cred
    )) as AxiosResponse<ApiResponse<UserMetaData>>;
    persistUserToken(headers);
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
    const { data, headers } = await axiosAuthInstance.post<
      ApiResponse<UserMetaData>
    >('signup', cred);
    persistUserToken(headers);
    return data;
  } catch (error) {
    return {
      message: 'Something went wrong',
      success: false,
    };
  }
}

function persistUserToken(
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders
) {
  if (headers && headers['x-auth-token']) {
    const userToken = headers['x-auth-token'];
    sessionStorage.setItem('userToken', userToken);
  }
}
