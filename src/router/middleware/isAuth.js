export default function auth({ next, store, nextMiddleware }) {
  if (store.getters.isUserAuthenticated) {
    switch (store.getters.getUserRole) {
      case 'Parent':
        return next({
          name: 'parent-children',
        });

      case 'Supplier':
        return next({
          name: 'supplier-sections',
        });

      case 'Coach':
        return next({
          name: 'coach-groups',
        });

      case 'Operator':
        return next({
          name: 'gov-applications',
        });

      case 'Employee':
        return next({
          name: 'employee-acts',
        });

      case 'Superadmin':
        return next({
          name: 'admin-users',
        });
    }
  }

  return nextMiddleware();
}
