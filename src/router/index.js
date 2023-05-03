import Vue from 'vue';
import VueRouter from 'vue-router';
import paths from './paths';
import { nextFactory } from '@/middleware';

Vue.use(VueRouter);

const router = new VueRouter({
  base: '/',
  mode: 'history',
  linkActiveClass: 'active',
  routes: paths,
});

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router;
