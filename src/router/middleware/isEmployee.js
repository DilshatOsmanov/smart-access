export default function isEmployee({ next, store, nextMiddleware }) {
    if (store.getters.getUserRole != 'Employee') {
      return next({
        name: 'sign-in',
      });
    }
  
    return nextMiddleware();
  }
  