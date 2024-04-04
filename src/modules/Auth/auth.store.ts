import { action, makeObservable, observable } from 'mobx';
import { AuthService } from './auth.service';
import { AuthCred, UserMetaData } from './typings';
import bcrypt from 'bcryptjs';
import { decodeToken, isExpired } from 'react-jwt';

class AuthStore extends AuthService {
  constructor() {
    super();
    makeObservable(this, {
      isLoading: observable,
      isAuthenticated: observable,
      userMetaData: observable,
      authenticate: action,
      unAuthenticate: action,
      setUserMetaData: action,
      loginUser: action,
      signupUser: action,
      logoutUser: action,
      persistUserMetaData: action,
    });
  }

  isAuthenticated?: boolean = false;
  isLoading?: boolean = false;
  userMetaData?: UserMetaData;

  authenticate() {
    this.isAuthenticated = true;
  }

  unAuthenticate() {
    this.isAuthenticated = false;
  }

  setUserMetaData(userMetaData?: UserMetaData) {
    this.userMetaData = userMetaData;
  }

  loginUser = async ({ email, password }: AuthCred) => {
    try {
      this.isLoading = true;
      if (!email || !password) {
        this.pushErrorNotification('Please provide email and password');
        return false;
      }
      const encryptedPassword = await this.encryptPlainText(password);
      const res = await this.login({ email, password: encryptedPassword });
      if (res?.success) {
        this.authenticate();
        this.setUserMetaData(res.data);
      } else {
        this.pushErrorNotification(res.message);
      }
      return res?.success;
    } catch (e) {
      this.pushErrorNotification('Something went wrong');
    } finally {
      this.isLoading = false;
    }
  };

  signupUser = async ({ email, password: pwd, username }: AuthCred) => {
    try {
      this.isLoading = true;
      if (!email || !pwd || !username) {
        this.pushErrorNotification(
          'Please provide email, password, and username'
        );
        return;
      }
      const password = await this.encryptPlainText(pwd);
      const res = await this.signup({
        email,
        password,
        username,
      });

      if (res?.success) {
        this.authenticate();
        this.setUserMetaData(res.data);
      } else {
        this.pushErrorNotification(res.message);
      }
    } catch (error) {
      this.pushErrorNotification('Something went wrong');
    } finally {
      this.isLoading = false;
    }
  };

  logoutUser = async () => {
    const res = await this.logout();
    if (res?.success) {
      this.pushInfoNotification(res.message);
    } else {
      this.pushErrorNotification(res.message);
    }
    sessionStorage.removeItem('userToken');
    this.unAuthenticate();
    this.setUserMetaData(undefined);
  };

  private encryptPlainText = async (plainText: string) => {
    try {
      const salt = '$2a$10$FbV4XQlkq/hL7JQwAVQ5uu';
      return await bcrypt.hashSync(plainText, salt);
    } catch (error) {
      console.error('Encryption error:', error);
      this.pushErrorNotification('Encryption error');
      throw error;
    }
  };

  persistUserMetaData = async () => {
    const { userToken } = sessionStorage;
    if (!userToken || isExpired(userToken)) {
      return;
    }
    const meta = decodeToken(userToken || '');
    this.setUserMetaData(meta as UserMetaData);
    this.authenticate();
  };
}

export default new AuthStore();
