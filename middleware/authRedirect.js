/* eslint-disable consistent-return */
export default function authRedirect({ store, route, redirect }) {
  const { path } = route;

  if (path !== '/' && !store.state.auth.user) {
    return redirect('/');
  }
  if (path === '/' && store.state.auth.user) {
    return redirect('/dashboard');
  }
}
