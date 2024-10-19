import { createBrowserRouter } from "react-router-dom";
import Home from "../pages";
import GoodEducation from "../components/Template 1/GoodEducation";
import Reviews from "../components/Template 1/Reviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/goodeducation",
    element: <GoodEducation />,
  },
  {
    path: "/reviews",
    element: <Reviews />,
  },
]);

export default router;
