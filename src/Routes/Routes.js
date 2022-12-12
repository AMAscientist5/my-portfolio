import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import GetInTouch from "../Pages/GetInTouch/GetInTouch";
import Home from "../Pages/Home/Home/Home";
import MySkills from "../Pages/MySkills/MySkills";
import Resume from "../Pages/Resume/Resume";
import Services from "../Pages/Services/Services";
import Testimonial from "../Pages/Testimonial/Testimonial";
import WorkDetail from "../Pages/WorkFeature/WorkDetail/WorkDetail";
import WorkDetail2 from "../Pages/WorkFeature/WorkDetail2/WorkDetail2";
import WorkDetail3 from "../Pages/WorkFeature/WorkDetail3/WorkDetail3";
import WorkDetail4 from "../Pages/WorkFeature/WorkDetail4/WorkDetail4";
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
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/testimonial",
        element: <Testimonial></Testimonial>,
      },
      {
        path: "/workdetails",
        element: <WorkDetail></WorkDetail>,
      },
      {
        path: "/workdetails2",
        element: <WorkDetail2></WorkDetail2>,
      },
      {
        path: "/workdetails3",
        element: <WorkDetail3></WorkDetail3>,
      },
      {
        path: "/workdetails4",
        element: <WorkDetail4></WorkDetail4>,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
