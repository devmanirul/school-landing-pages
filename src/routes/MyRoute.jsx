import { createBrowserRouter } from "react-router-dom";
import Home from "../pages";
import GoodEducation from "../components/Template 1/GoodEducation";
import Reviews from "../components/Template 1/Reviews";
import Instructor from "../components/Template 1/Instructors";
import StairCase from "../components/Template 1/StairCase";

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
  {
    path: "/instructor",
    element: <Instructor />,
  },
  {
    path: "/staircase",
    element: <StairCase />,
  },
]);

export default router;
