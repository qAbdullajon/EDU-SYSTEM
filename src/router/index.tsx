import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import { Layout, Tasklar } from "@modules";

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Tasklar />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default index;
