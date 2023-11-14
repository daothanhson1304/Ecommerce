import { createBrowserRouter } from 'react-router-dom';

import Shop from '@pages/Shop';
import ProductDetail from '@pages/Product';
import ShoppingCard from '@pages/ShoppingCard';
import { Auth, SignUp, SignIn } from '@pages/Auth';
import { Checkout, CheckoutSuccess } from '@pages/Checkout';
import TrackOrder from '@pages/TrackOrder';
import OrderDetail from '@pages/OrderDetail';
import Layout from '@components/Layout';

import ROUTES from './constants';
import RequireAuth from './RequireAuth';

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
      {
        path: ROUTES.SHOPPING_CARD.ABSOLUTE_PATH,
        element: <RequireAuth element={<ShoppingCard />} />,
      },
      {
        path: ROUTES.CHECKOUT.ABSOLUTE_PATH,
        element: <RequireAuth element={<Checkout />} />,
      },
      {
        path: ROUTES.CHECKOUT_SUCCESS.ABSOLUTE_PATH,
        element: <RequireAuth element={<CheckoutSuccess />} />,
      },
      {
        path: ROUTES.TRACK_ORDER.ABSOLUTE_PATH,
        element: <RequireAuth element={<TrackOrder />} />,
      },
      {
        path: ROUTES.TRACK_ORDER_DETAIL.ABSOLUTE_PATH,
        element: <RequireAuth element={<OrderDetail />} />,
      },
    ],
  },
]);

export default routes;
