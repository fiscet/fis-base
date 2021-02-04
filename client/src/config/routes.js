import Home from '../pages/home/home.page';
import SignIn from '../pages/sign-in/sign-in.page';
import SignUp from '../pages/sign-up/sign-up.page';
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
    component: SignIn,
  },
  {
    id: 'register',
    path: '/register',
    exact: true,
    component: SignUp,
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
