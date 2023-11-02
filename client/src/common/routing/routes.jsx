import { createBrowserRouter } from 'react-router-dom';

import Shop from '@pages/Shop';
import { Auth, SignUp, SignIn } from '@pages/Auth';
import ProductDetail from '@pages/Product';
import Layout from '@components/Layout';
import ROUTES from './constants';

const routes = createBrowserRouter([
  {
    path: ROUTES.HOME.RELATIVE_PATH,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Shop />,
      },
      {
        path: ROUTES.AUTH.RELATIVE_PATH,
        element: <Auth />,
        children: [
          {
            path: ROUTES.SIGN_IN.RELATIVE_PATH,
            element: <SignIn />,
          },
          {
            path: ROUTES.SIGN_UP.RELATIVE_PATH,
            element: <SignUp />,
          },
        ],
      },
      {
        path: ROUTES.PRODUCT_DETAIL.ABSOLUTE_PATH,
        element: <ProductDetail />,
      },
    ],
  },
]);

export default routes;
