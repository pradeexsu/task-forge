export type ApiResponse<T = never> = {
  success: boolean;
  message: string;
  data?: T;
};
