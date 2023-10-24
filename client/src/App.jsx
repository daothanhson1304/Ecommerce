import { RouterProvider } from "react-router-dom";
import routes from "@common/routing";

export default function App() {
  return <RouterProvider router={routes} />;
}
