import {
  AlternateEmail,
  Key,
  Person,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function LoginSignup({ signup = false }: { signup?: boolean }) {
  const { loginUser, signupUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        Please wait, You will be redirected shortly...
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 overflow-hidden min-w-[340px]">
      <div className="max-w-md w-full mt-[-10vh] card p-5 shadow-xl ">
        <h2 className=" text-center text-3xl font-extrabold text-gray-900 font-monts">
          {signup ? 'Sign up to create new account' : 'Sign in to your account'}
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2">
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
            <label className="input input-bordered flex items-center gap-2">
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
          <label className="input input-bordered flex items-center gap-2">
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
              className="btn btn-secondary w-full font-bold text-lg text-white"
              type="submit"
            >
              {signup ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
