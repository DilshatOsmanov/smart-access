export default function isSupplier({ next, store, nextMiddleware }) {
  if (store.getters.getUserRole != 'Supplier') {
    return next({
      name: 'sign-in',
    });
  }

  return nextMiddleware();
}
