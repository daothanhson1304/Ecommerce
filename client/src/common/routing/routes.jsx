import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./constants";
import Layout from "@components/Layout";
import Home from "@pages/Home";

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
