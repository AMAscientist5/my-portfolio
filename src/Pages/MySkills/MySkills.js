import React from "react";
import "./MySkills.css";
const MySkills = () => {
  return (
    <div className="custom-skill-color">
      <div className="skill-div mx-auto lg:mt-16">
        <button className="btn">HTML</button>
        <button className="btn btn-primary">CSS</button>
        <button className="btn btn-secondary">Bootstrap</button>
        <button className="btn btn-accent">Tailwind</button>
        <button className="btn bg-white text-gray-400 ">Javascript</button>
        <button className="btn btn-active">React</button>
        <button className="btn btn-active btn-primary">Node.js</button>
        <button className="btn btn-active btn-secondary">Express.js</button>
        <button className="btn btn-active btn-accent">Mongo.DB</button>
        <button className="btn btn-active custom-btn-g">Git&Github </button>
      </div>
    </div>
  );
};

export default MySkills;
