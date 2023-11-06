import { Navigate, useLocation } from 'react-router-dom';
import ROUTES from './constants';

export default function RequireAuth({ element }) {
  const location = useLocation();
  const id = localStorage.getItem('userId');
  return element;
  // if (id) {
  //   //  const { data: user, isLoading } = useGetSingleUserQuery({ id });

  //   //  if (isLoading) return <Loader />;

  //   // if (user && restrictedTo.includes(user.role)) {
  //   return element;
  //   // }
  // }
  // return (
  //   <Navigate
  //     to={ROUTES.SIGN_IN.ABSOLUTE_PATH}
  //     state={{ from: location }}
  //     replace
  //   />
  // );
}
