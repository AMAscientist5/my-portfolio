import React from "react";
import photo from "../../../Asset/mine1.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="text-white lg:flex lg:justify-center lg:items-center h-100">
      <div className="banner-heading">
        <h1>
          Hello, <br />
          I'm Ahmad Musa Abdullah
        </h1>
        <h2 className=" text-gray-400 font-bold">
          Full Stack Web Developer || Educational Consultant
        </h2>
      </div>
      <div className="custom-img">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default Banner;
