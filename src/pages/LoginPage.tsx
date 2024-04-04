import { observer } from 'mobx-react-lite';
import LoginSignup from '../components/LoginSignup';

function LoginPage() {
  return <LoginSignup />;
}

export default observer(LoginPage);
