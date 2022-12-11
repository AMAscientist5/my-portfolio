import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import GetInTouch from "../Pages/GetInTouch/GetInTouch";
import Home from "../Pages/Home/Home/Home";
import MySkills from "../Pages/MySkills/MySkills";
import Resume from "../Pages/Resume/Resume";
import WorkFeature from "../Pages/WorkFeature/WorkFeature";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/resume",
        element: <Resume></Resume>,
      },
      {
        path: "/getintouch",
        element: <GetInTouch></GetInTouch>,
      },
      {
        path: "/workfeature",
        element: <WorkFeature></WorkFeature>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/myskill",
        element: <MySkills></MySkills>,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
