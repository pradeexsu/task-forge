import { axiosAuthInstance } from '../Axios/axios.instance';
import { ApiResponse } from '../Axios/typings';
import { AxiosResponse } from 'axios';
import { NotificationService } from '../Notification';

class PingService extends NotificationService {
  constructor() {
    super();
  }
  ping = async () => {
    try {
      const res = (await axiosAuthInstance.get('ping')) as AxiosResponse<
        ApiResponse<unknown>
      >;

      if (res.status <= 299 && res.status >= 200) {
        // this.pushInfoNotification('Service Connected!')
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };
}

export default new PingService();
