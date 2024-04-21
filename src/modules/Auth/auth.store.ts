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
        location.reload();
      } else {
        this.pushErrorNotification(res.message);
      }
      return res?.success;
    } catch (e) {
      this.isLoading = false;
      this.pushErrorNotification('Something went wrong');
    }
  };

  signupUser = async ({ email, password: pwd, username }: AuthCred) => {
    try {
      this.isLoading = true;
      if (!email || !pwd || !username) {
        this.pushErrorNotification(
          'Please provide email, password, and username',
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
        location.reload();
      } else {
        this.pushErrorNotification(res.message);
      }
    } catch (error) {
      this.isLoading = false;
      this.pushErrorNotification('Something went wrong');
    }
  };

  logoutUser = async () => {
    // const res = await this.logout();
    // if (res?.success) {
    //   this.pushInfoNotification(res.message);
    // } else {
    //   this.pushErrorNotification(res.message);
    // }
    sessionStorage.removeItem('userToken');
    this.unAuthenticate();
    this.setUserMetaData(undefined);
    location.reload();
  };

  private encryptPlainText = async (plainText: string) => {
    try {
      const salt = import.meta.env.VITE_ENCRYPTION_SALT;
      // const salfy = bcrypt.genSaltSync();
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

  validateUser = (user: AuthCred, signup: boolean) => {
    if (!user || !user?.email || !user?.password) return false;

    if (!this.validateEmail(user.email)) {
      return false;
    }
    if (signup) {
      return (
        this.validateUsername(user?.username) &&
        this.validatePassword(user.password)
      );
    }

    return true;
  };

  validatePassword = (password?: string) => {
    if (!password) {
      this.pushErrorNotification(
        'Password must be 8+ chars with at least 1 lowercase, 1 uppercase, 1 digit, and 1 special char.',
      );
      return false;
    }
    // Regular expressions for validation
    const regexLength = /.{8,}/; // At least 8 characters long
    const regexLowerCase = /[a-z]/; // At least one lowercase letter
    const regexUpperCase = /[A-Z]/; // At least one uppercase letter
    const regexDigit = /\d/; // At least one digit
    const regexSpecialChar = /[!@#$%^&*()_+{}\[\]:;'"<>,.?/\\|~-]/; // At least one special character

    // Check if password meets all criteria
    const isValidLength = regexLength.test(password);
    const hasLowerCase = regexLowerCase.test(password);
    const hasUpperCase = regexUpperCase.test(password);
    const hasDigit = regexDigit.test(password);
    const hasSpecialChar = regexSpecialChar.test(password);

    // Return true if all conditions are met, otherwise false
    const isValid =
      isValidLength &&
      hasLowerCase &&
      hasUpperCase &&
      hasDigit &&
      hasSpecialChar;
    if (!isValid)
      this.pushErrorNotification(
        'Password must be 8+ chars with at least 1 lowercase, 1 uppercase, 1 digit, and 1 special char.',
      );
    return isValid;
  };

  validateEmail = (email?: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    if (!email) {
      this.pushErrorNotification('Invalid email');
      return false;
    }
    const isValid = regex.test(email);
    if (!isValid) this.pushErrorNotification('Invalid email');
    return isValid;
  };

  validateUsername = (username?: string) => {
    if (!username) {
      this.pushErrorNotification(
        'Username must be 3-20 chars, allowing letters, numbers, and underscores, but disallowing whitespace.',
      );
      return false;
    }
    const minLength = 3; // Minimum length of the username
    const maxLength = 20; // Maximum length of the username
    const allowedChars = /^[a-zA-Z0-9_]+$/; // Regular expression for allowed characters (letters, numbers, and underscore)
    const disallowedChars = /\s/; // Regular expression for disallowed characters (whitespace)

    if (
      username.length < minLength ||
      username.length > maxLength ||
      disallowedChars.test(username) ||
      disallowedChars.test(username) ||
      !allowedChars.test(username)
    ) {
      this.pushErrorNotification(
        'Username must be 3-20 chars, allowing letters, numbers, and underscores, but disallowing whitespace.',
      );
      return false;
    }
    return true;
  };
}

export default new AuthStore();
