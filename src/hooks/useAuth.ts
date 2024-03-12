import useEncrypt from './useEncrypt';
import { login, signup } from '../service/auth';
import { AuthCred } from '../typings';
import useToken from './useToken';

export default function useAuth() {
  const encrypt = useEncrypt();
  const { persistUserMetaData } = useToken();

  async function loginUser({ email, password }: AuthCred) {
    if (!email || !password) return false;
    const encryptedPassword = await encrypt(password);
    const res = await login({ email, password: encryptedPassword });
    if (res?.success) persistUserMetaData();
    return res?.success;
  }

  async function signupUser({ email, password, username }: AuthCred) {
    if (!email || !password || !username) return false;
    const encryptedPassword = await encrypt(password);
    const res = await signup({ email, password: encryptedPassword, username });
    if (res?.success) persistUserMetaData();

    return res.success;
  }

  return { loginUser, signupUser };
}
