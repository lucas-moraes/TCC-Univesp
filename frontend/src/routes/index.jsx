import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {FacialRecognition} from "../modules/FacialRecognition";
import {FacialManagement} from "../modules/FacialManagement";
import {ContextApiProvider} from "../contextApi";

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
  return (
    <ContextApiProvider>
      <RouterProvider router={routes} />
    </ContextApiProvider>
  );
};
