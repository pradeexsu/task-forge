import { observer } from 'mobx-react-lite';
import LoginSignup from '../components/LoginSignup';

function SignupPage() {
  return <LoginSignup signup />;
}

export default observer(SignupPage);
