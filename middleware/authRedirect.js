/* eslint-disable consistent-return */
export default function authRedirect({ store, route, redirect }) {
  const path = route.fullPath;

  if (path !== '/' && !store.state.auth.user) {
    return redirect('/');
  }
  if (path === '/' && store.state.auth.user) {
    return redirect('/dashboard');
  }
}
