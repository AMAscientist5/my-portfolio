import React from "react";
import photo from "../../Asset/sakib.jpg";
import "./Testimonial.css";
const Testimonial = () => {
  return (
    <div className="testimonial-custom text-center">
      <h1 className="text-4xl font-bold my-5 mt-10">Testimonials</h1>
      <h2 className="text-2xl ">
        People I've worked with have said some nice things...
      </h2>
      <img className="sakib mx-auto my-12" src={photo} alt="" />
      <p className="text-2xl">
        “He is a great and efficient personality. He is uncompromising, honest
        and multi-talented <br /> in his work. Both of us have worked together
        for a long time. He was very helpful <br /> and courteous. I wish him a
        bright future. 😊”
      </p>

      <h2 className="text-2xl font-bold mt-10">Saiful Islam Sakib</h2>
      <p className="mb-10">
        Team lead | Senior Customer Service Executive at Khaas Food{" "}
      </p>
    </div>
  );
};

export default Testimonial;
