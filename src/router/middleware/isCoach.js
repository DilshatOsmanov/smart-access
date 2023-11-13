export default function isCoach({ next, store, nextMiddleware }) {
    if (store.getters.getUserRole != 'Coach') {
      return next({
        name: 'sign-in',
      });
    }
  
    return nextMiddleware();
  }
  