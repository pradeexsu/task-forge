import {
  Key,
  Person,
  Visibility,
  VisibilityOff,
  AlternateEmail,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import authStore from '../modules/Auth/auth.store';
import { observer } from 'mobx-react-lite';

type LoginSignupProps = {
  signup?: boolean;
};

function LoginSignup({ signup = false }: LoginSignupProps) {
  const { loginUser, signupUser, isLoading } = authStore;

  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleSubmit = async () => {
    if (signup) {
      await signupUser(user);
    } else {
      await loginUser(user);
    }
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        {'Please wait, You will be redirected shortly...'}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#282A36] px-4 sm:px-6 lg:px-8 overflow-hidden min-w-[300px]">
      <div className="max-w-md w-full mt-[-10vh] card px-4  py-8 shadow-xl bg-gray-50 rounded-sm">
        <h2 className=" text-center text-2xl font-medium text-gray-900 font-monts">
          {signup ? 'Sign up to new account' : 'Sign in to your account'}
        </h2>
        <div className="mt-8 space-y-6">
          <label className="input flex items-center gap-2 rounded-sm focus-within:outline-0">
            <span className="hidden sm:inline">
              <AlternateEmail />
            </span>
            <input
              type="email"
              name="email"
              className="grow"
              value={user.email}
              placeholder="Email"
              onChange={onChange}
            />
          </label>

          {signup && (
            <label className="input flex items-center gap-2 rounded-sm focus-within:outline-0">
              <span className="hidden sm:inline">
                <Person />
              </span>
              <input
                type="text"
                name="username"
                className="grow"
                value={user.username}
                placeholder="Username"
                onChange={onChange}
              />
            </label>
          )}
          <label className="input flex items-center gap-2 rounded-sm focus-within:outline-0">
            <span className="hidden sm:inline">
              <Key />
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              className="grow "
              name="password"
              placeholder="Password"
              value={user?.password}
              onChange={onChange}
            />
            <button
              type="button"
              className="btn btn-link mr-[-15px]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <VisibilityOff color="action" />
              ) : (
                <Visibility color="action" />
              )}
            </button>
          </label>
          <h2 className="hover:underline no-underline font-medium font-monts link link-primary">
            {signup ? (
              <Link to="/login">Already have an account?</Link>
            ) : (
              <Link to="/signup">Create new account?</Link>
            )}
          </h2>
          <div>
            <button
              className="btn btn-secondary w-full font-bold text-lg text-white rounded-sm"
              onClick={handleSubmit}
            >
              {signup ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(LoginSignup);
