import Home from '../pages/home/home.page';
import SignInAndUp from '../pages/sign-in/sign-in.page';
import Dashboard from '../pages/dashboard/dashboard.page';

export const publicRoutes = [
  {
    id: 'home',
    path: '/',
    exact: true,
    component: Home,
  },
];

export const restrictedRoutes = [
  {
    id: 'login',
    path: '/login',
    exact: true,
    component: SignInAndUp,
  },
];

export const privateRoutes = [
  {
    id: 'dashboard',
    path: '/dashboard',
    exact: true,
    component: Dashboard,
  },
];
