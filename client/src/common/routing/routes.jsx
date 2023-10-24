import { createBrowserRouter } from 'react-router-dom';

import Layout from '@components/Layout';
import Home from '@pages/Home';
import ROUTES from './constants';

const routes = createBrowserRouter([
  {
    path: ROUTES.HOME.RELATIVE_PATH,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default routes;
