import { Navigate, useLocation } from 'react-router-dom';
import ROUTES from './constants';

export default function RequireAuth({ element }) {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.id) {
    return element;
  }
  return (
    <Navigate
      to={ROUTES.SIGN_IN.ABSOLUTE_PATH}
      state={{ from: location }}
      replace
    />
  );
}
