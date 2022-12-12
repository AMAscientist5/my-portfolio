import React from "react";
import { Link, Outlet } from "react-router-dom";
// import Footer from "../Pages/Shared/Footer/Footer";
// import WorkFeature from "../Pages/WorkFeature/WorkFeature";

import "./Main.css";

const Main = () => {
  return (
    <div className="custom-drawer">
      <label
        tabIndex={0}
        htmlFor="my-drawer-2"
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="bg-gray-200 drawer-content flex flex-col">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu custom-drawer bg-base-100 text-base-content text-center">
            <Link
              to="/"
              className=" bg-black p-2  py-5 text-white font-bold normal-case text-xl"
            >
              Ahmad Musa <br />
              <span className="text-title">Web Developer</span>
            </Link>
            <li className="custom-li">
              <Link to="/">Home</Link>
            </li>
            <li className="custom-li">
              <Link to="/about">About</Link>
            </li>
            <li className="custom-li">
              <Link to="/workfeature">Work Feature</Link>
            </li>
            <li className="custom-li">
              <Link to="/myskill">My Skill</Link>
            </li>
            <li className="custom-li">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="custom-li">
              <a
                href="https://drive.google.com/file/d/1bnwNgE41qLG85_o1OwdO0OXoY2rugq8n/view?usp=sharing"
                target="blank"
              >
                Resume
              </a>
            </li>
            <li className="custom-li">
              <Link to="services">Services</Link>
            </li>
            <li className="custom-li">
              <Link to="/testimonial">Testimonial</Link>
            </li>
            <li className="custom-li">
              <Link to="/getintouch">Get In Touch</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <WorkFeature></WorkFeature> */}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;
