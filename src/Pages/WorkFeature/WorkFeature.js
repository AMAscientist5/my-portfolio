import React from "react";
import { Link } from "react-router-dom";
// import book from "../../Asset/bookpic/book.JPG";
// import easy from "../../Asset/easypic/easy.JPG";
// import visa from "../../Asset/visapic/visa.JPG";
// import tech from "../../Asset/techpic/tech.JPG";
import pic1 from "../../Asset/homepic/p2.JPG";
import pic2 from "../../Asset/homepic/p1.JPG";
import pic3 from "../../Asset/homepic/p3.JPG";
import pic4 from "../../Asset/homepic/p4.JPG";
import "./WorkFeature.css";
const WorkFeature = () => {
  return (
    <div className="work-feature-custom-color lg:h-full">
      <h2 className="text-4xl text-gray-400 font-bold text-center my-10">
        Recent Work Projects
      </h2>
      <h2 className="text-1xl text-gray-400 font-bold text-center mb-5">
        Here are a few past design projects I've worked on. Want to see more?
        <Link className="text-accent" to="/getintouch">
          <span className="ml-2">Email me</span>
        </Link>
      </h2>

      <div className="lg:flex lg:flex-wrap  hover:visible justify-center items-center">
        <div
          className="p-10 lg:w-2/5 mb-5"
          style={{
            backgroundImage: `url(${pic1})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-4xl mb-8">Book-Resale</h1>

          <Link to="/workdetails">
            <button className="btn btn-outline btn-info">See Detail</button>
          </Link>
        </div>
        <div
          className="p-10 lg:w-2/5"
          style={{
            backgroundImage: `url(${pic2})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-4xl mb-8">Visa Consultancy</h1>
          {/* <p className="font-bold text-gray-400 mb-8 para-custom-size">
            Before transitioning into residential real estate, Kathryn had a
            successful, 15-year career in software engineering{" "}
          </p> */}

          <Link to="/workdetails2">
            <button className="btn btn-outline btn-info">See Detail</button>
          </Link>
        </div>
        <div
          className="p-10 lg:w-2/5 mb-5"
          style={{
            backgroundImage: `url(${pic3})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-4xl mb-8">Easy Learning</h1>

          <Link to="/workdetails3">
            <button className="btn btn-outline btn-info">See Detail</button>
          </Link>
        </div>
        <div
          className="p-10 lg:w-2/5"
          style={{
            backgroundImage: `url(${pic4})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-4xl mb-8">Tech Learning</h1>
          <Link to="/workdetails4">
            <button className="btn btn-outline btn-info">See Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkFeature;
