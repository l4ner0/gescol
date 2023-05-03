import { PATHS } from '@/utils/routeConstants';

export default function redirectHome({ next, router, to }) {
  if (to.path === PATHS.login.pathBase && localStorage.getItem('jwt')) {
    return router.push({ name: 'DashboardPage' });
  }
  return next();
}
