import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="custom-service-color text-center">
      <div className="lg:ml-96 lg:mt-24">
        <button className="btn custom-services">Front-end Development</button>
        <button className="btn btn-primary custom-services">
          Front-end Designing
        </button>
        <button className="btn btn-secondary custom-services">
          Responsive Web Development
        </button>{" "}
        <button className="btn btn-accent custom-services">
          Backend-end Development
        </button>
        <button className="btn bg-white text-gray-400 custom-services">
          Full-Stack Development
        </button>{" "}
        <button className="btn btn-active btn-primary custom-services">
          API Security
        </button>{" "}
        <button className="btn btn-active btn-secondary custom-services">
          Authentication
        </button>{" "}
        <button className="btn btn-active btn-accent custom-services">
          Schooling Visa Consultation
        </button>{" "}
        <button className="btn btn-active custom-btn-g custom-services">
          Study Abroad Consultation
        </button>
      </div>
    </div>
  );
};

export default Services;
