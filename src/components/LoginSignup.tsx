import {
  AlternateEmail,
  Key,
  Person,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';

type LoginSignupProps = {
  signup?: boolean;
};

function LoginSignup({ signup = false }: LoginSignupProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { loginUser, signupUser } = useAuth();

  const handleSubmit = async () => {
    if (!email || !password) return;
    setLoading(true);
    if (signup) {
      await signupUser({ email, password, username });
    } else {
      await loginUser({ email, password });
    }
    setLoading(false);
  };
  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        {'Please wait, You will be redirected shortly...'}
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#282A36] px-4 sm:px-6 lg:px-8 overflow-hidden min-w-[300px]">
      <div className="max-w-md w-full mt-[-10vh] card px-4 sm:px-8 py-8 shadow-xl bg-gray-50 rounded-none">
        <h2 className=" text-center text-2xl font-medium text-gray-900 font-monts">
          {signup ? 'Sign up to new account' : 'Sign in to your account'}
        </h2>
        <div className="mt-8 space-y-6">
          <label className="input flex items-center gap-2 rounded-none">
            <span className="hidden sm:inline">
              <AlternateEmail />
            </span>
            <input
              type="email"
              className="grow"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          {signup && (
            <label className="input flex items-center gap-2 rounded-none">
              <span className="hidden sm:inline">
                <Person />
              </span>
              <input
                type="text"
                className="grow"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          )}
          <label className="input flex items-center gap-2 rounded-none">
            <span className="hidden sm:inline">
              <Key />
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              className="grow"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-link mr-[-15px] text-white "
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <VisibilityOff color="inherit" />
              ) : (
                <Visibility color="inherit" />
              )}
            </button>
          </label>
          <h2 className="hover:underline text-secondary-content font-medium font-monts">
            {signup ? (
              <Link to="/login">Already have an account?</Link>
            ) : (
              <Link to="/signup">Create new account?</Link>
            )}
          </h2>
          <div>
            <button
              className="btn btn-secondary w-full font-bold text-lg text-white rounded-none"
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

export default LoginSignup;
