import { Navigate, useLocation } from 'react-router-dom';
import routes from './routes';

export default function RequireAuth({ element, restrictedTo }) {
  const location = useLocation();
  const id = sessionStorage.getItem('userId') || localStorage.getItem('userId');
  if (id) {
    const user = {};
    //  const { data: user, isLoading } = useGetSingleUserQuery({ id });

    //  if (isLoading) return <Loader />;

    if (user && restrictedTo.includes(user.role)) {
      return element;
    }
  }
  return (
    <Navigate
      to={routes.Login.absolutePath}
      state={{ from: location }}
      replace
    />
  );
}
