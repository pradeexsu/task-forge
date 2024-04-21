import { axiosAuthInstance, axiosInstance } from '../Axios/axios.instance';
import { ApiResponse } from '../Axios/typings';
import { AuthCred, UserMetaData } from '../../typings';
import { AxiosResponse } from 'axios';
import { COMMON_ERROR } from '../Axios/const';
import { NotificationService } from '../Notification';

export class AuthService extends NotificationService {
  constructor() {
    super();
  }

  protected async login(cred: AuthCred): Promise<ApiResponse<UserMetaData>> {
    try {
      const { data } = (await axiosAuthInstance.post(
        'login',
        cred,
      )) as AxiosResponse<ApiResponse<UserMetaData>>;
      return data;
    } catch (error) {
      return COMMON_ERROR;
    }
  }

  signup = async (cred: AuthCred): Promise<ApiResponse<UserMetaData>> => {
    try {
      const { data } = await axiosAuthInstance.post<ApiResponse<UserMetaData>>(
        'signup',
        cred,
      );
      return data;
    } catch (error) {
      return COMMON_ERROR;
    }
  };

  protected async logout(): Promise<ApiResponse<never>> {
    try {
      const { data } = await axiosInstance.delete<ApiResponse<never>>('logout');
      return data;
    } catch (error) {
      return COMMON_ERROR;
    }
  }
}
