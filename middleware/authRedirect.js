export default function ({ store, route, redirect }) {
  const path = route.fullPath;

  if (path !== '/' && !store.state.auth.user) {
    return redirect('/');
  } else if (path === '/' && store.state.auth.user) {
    return redirect('/dashboard');
  }
}