import React from "react";
import photo from "../../../Asset/mine1.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="text-white lg:flex lg:justify-center lg:items-center">
      <div className="banner-heading">
        <h1>
          Hello, <br />
          I'm Ahmad Musa Abdullah
        </h1>
        <h2 className=" text-gray-400 font-bold">
          Full Stack Web Developer || Educational Consultant
        </h2>

        <p className="text-gray-300 pt-12 text-center">
          I'm a bit of a digital product junky. Over the year, I've used many of
          web apps <br /> in my different experiences. Eventually, I decided
          that it would be a fun challenge to try <br />
          <p>designing and building my own.</p>
        </p>
      </div>
      <div className="custom-img">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default Banner;
