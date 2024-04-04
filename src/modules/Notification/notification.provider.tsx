import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NotificationProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}

export default NotificationProvider;
