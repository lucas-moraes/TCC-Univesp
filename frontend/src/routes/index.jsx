import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {FacialRecognition} from "../modules/FacialRecognition";
import {FacialManagement} from "../modules/FacialManagement";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <FacialRecognition />,
  },
  {
    path: "/facial-management",
    element: <FacialManagement />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={routes} />;
};
