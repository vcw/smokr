/* eslint-disable consistent-return */
export default function authRedirect({ store, route, redirect }) {
  const { path } = route;

  const whitelist = [
    '/',
    '/sign-in',
  ];

  if (!whitelist.includes(path) && !store.state.auth.user) {
    return redirect('/');
  }
  if (whitelist.includes(path) && store.state.auth.user) {
    return redirect('/home');
  }
}
