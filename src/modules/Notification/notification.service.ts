import { ToastDataType, ToastOptionsType } from './typpings';
import { toast } from 'react-toastify';

export default class NotificationService {
  private options: ToastOptionsType = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  constructor() {}

  protected async pushAsyncNotification(
    promise: Promise<unknown>,
    {
      pending,
      success,
      error,
    }: {
      pending: string;
      success: string;
      error: string;
    }
  ) {
    toast.promise(promise, {
      pending,
      success,
      error,
    });
  }

  protected async pushInfoNotification(content: ToastDataType) {
    toast.info(content, this.options);
  }

  protected async pushErrorNotification(content: ToastDataType) {
    toast.error(content, this.options);
  }
}
