export enum PAGES {
  HOME = 'home',
  LOGIN = 'login',
  SIGNUP = 'signup',
  PROFILE = 'profile',
  DEFAULT = '*',
}
export type RouteConfig = {
  href: string;
  title: string;
  Element: () => JSX.Element;
  auth?: boolean;
};
