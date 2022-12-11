import React from "react";
import "./WorkFeature.css";
const WorkFeature = () => {
  return (
    <div className="work-feature-custom-color p-8">
      <h2 className="text-4xl text-gray-400 font-bold text-center my-10">
        Recent Work Projects
      </h2>
      <div className="work-feature-card grid sm:grid-1 lg:grid-cols-2 gap-5">
        <div className="p-10">
          <h1 className="text-4xl mb-8">Book-Resale</h1>
          <p className="font-bold text-gray-400 mb-8 para-custom-size">
            Before transitioning into residential real estate, Kathryn had a
            successful, 15-year career in software engineering{" "}
          </p>

          <a href="https://aradun-book-resale.web.app/" target="blank">
            <button className="btn btn-outline btn-info">Visit Website</button>
          </a>
        </div>
        <div className="p-10">
          <h1 className="text-4xl mb-8">Aradun Visa Consultancy</h1>
          <p className="font-bold text-gray-400 mb-8 para-custom-size">
            Before transitioning into residential real estate, Kathryn had a
            successful, 15-year career in software engineering{" "}
          </p>
          <a href="https://visa-consultancy-service.web.app/" target="blank">
            <button className="btn btn-outline btn-info">Visit Website</button>
          </a>
        </div>
        <div className="p-10">
          <h1 className="text-4xl mb-8">Easy Learning</h1>
          <p className="font-bold text-gray-400 mb-8 para-custom-size">
            Before transitioning into residential real estate, Kathryn had a
            successful, 15-year career in software engineering{" "}
          </p>
          <a
            href="https://easy-learning-plartform.web.app/getstarted"
            target="blank"
          >
            <button className="btn btn-outline btn-info">Visit Website</button>
          </a>
        </div>
        <div className="p-10">
          <h1 className="text-4xl mb-8">Tech Learning</h1>
          <p className="font-bold text-gray-400 mb-8 para-custom-size">
            Before transitioning into residential real estate, Kathryn had a
            successful, 15-year career in software engineering{" "}
          </p>
          <a
            href="https://amascientist5.github.io/Tech-Learning/index.html"
            target="blank"
          >
            <button className="btn btn-outline btn-info">Visit Website</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkFeature;
