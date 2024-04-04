import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router-dom';

export default observer(function LoginRedirect() {
  return <Navigate to="/login" />;
});
