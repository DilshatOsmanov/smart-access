export default function isGov({ next, store, nextMiddleware }) {
    if (store.getters.getUserRole != 'Operator') {
      return next({
        name: 'sign-in',
      });
    }
  
    return nextMiddleware();
  }