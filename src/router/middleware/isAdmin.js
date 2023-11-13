export default function isCoach({ next, store, nextMiddleware }) {
  if (store.getters.getUserRole != 'Superadmin') {
    return next({
      name: 'sign-in',
    });
  }

  return nextMiddleware();
}
