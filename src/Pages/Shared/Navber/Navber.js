import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div>
      <div className="navbar bg-base-200 flex justify-between">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost font-bold normal-case text-xl">
            Ahmad Musa
          </Link>
        </div>
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
      </div>
    </div>
  );
};

export default Navber;
