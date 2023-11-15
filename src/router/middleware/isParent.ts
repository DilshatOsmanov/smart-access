export default function isParent({ next, store, nextMiddleware }) {
  if (store.getters.getUserRole != 'Parent') {
    return next({
      name: 'sign-in',
    });
  }

  return nextMiddleware();
}
