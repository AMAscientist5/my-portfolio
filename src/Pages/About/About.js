import React from "react";
import photo from "../../Asset/mineb2.jpg";

const About = () => {
  return (
    <div
      style={{ backgroundColor: "#1D1D1D", height: "100vh" }}
      className="text-gray-500 p-10 text-justify  lg:flex lg:items-center"
    >
      <div className="w-50%">
        <p className="text-3xl text-white mb-4">
          Hi, I’m Ahmad Musa. Nice to meet you.
        </p>
        <p className="mb-5">
          I have been working for more than 12 years in many fields as a Sales
          Agent, Manager, <br /> Client Service Specialist (CRM). Educational
          Counselor in multiple companies. Finally, <br /> I am working in my
          best choice and become Full Stack Web-Developer
        </p>

        <p className="mb-5">
          I work to make a better web; one that is fast, easy to use, beautiful,
          accessible to all, <br /> and frustration-free. Regardless of your
          specific business requirements, in solving these challenges, <br />{" "}
          you have a great chance of finding success online.
        </p>
        <p>
          My main experience is in front-end development but I also have a
          passion for design. <br /> Given that producing a modern website
          requires the combination of design, server technology, <br /> and the
          layer that users interacts with, I believe having experience in both
          design and <br /> development allows for making the most optimal user
          experiences.
        </p>
      </div>
      <div className="w-50%">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default About;
