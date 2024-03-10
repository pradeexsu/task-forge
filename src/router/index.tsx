import Home from '../pages/Home';
import Profile from '../pages/Profile';
import { RouteConfig, PAGES } from './typeings';
import HomeRedirect from '../pages/HomeRedirect';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import LoginRedirect from '../pages/loginRedirect';

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
    Element: HomeRedirect,
  },
];

export const UNAUTHENTICATED_ROUTES: RouteConfig[] = [
  {
    href: PAGES.LOGIN,
    title: 'Login to Task forge',
    Element: LoginPage,
  },
  {
    href: PAGES.SIGNUP,
    title: 'Signup to Task forge',
    Element: SignupPage,
  },
  {
    href: PAGES.DEFAULT,
    title: 'Login',
    Element: LoginRedirect,
  },
];
