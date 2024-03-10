import LoginSignup from '../pages/LoginSignup';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import { Navigate } from 'react-router-dom';
import { RouteConfig, PAGES } from './typeings';

export const AUTHENTICATED_ROUTES: RouteConfig[] = [
  {
    href: PAGES.HOME,
    title: 'Tark forge',
    Element: Home,
  },
  {
    href: PAGES.PROFILE,
    title: 'Tark forge',
    Element: Profile,
  },
  {
    href: PAGES.DEFAULT,
    title: 'Home',
    Element: () => <Navigate to="/home" />,
  },
];

export const UNAUTHENTICATED_ROUTES: RouteConfig[] = [
  {
    href: PAGES.LOGIN,
    title: 'Login to Task forge',
    Element: () => <LoginSignup />,
  },
  {
    href: PAGES.SIGNUP,
    title: 'Signup to Task forge',
    Element: () => <LoginSignup signup />,
  },
  {
    href: PAGES.DEFAULT,
    title: 'Login',
    Element: () => <Navigate to="/login" />,
  },
];
