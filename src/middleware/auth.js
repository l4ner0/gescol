export default function auth({ next, router }) {
  if (!localStorage.getItem('jwt')) {
    return router.push({ name: 'LoginPage' });
  }
  return next();
}
