import React from "react";
import WorkFeature from "../../WorkFeature/WorkFeature";
// import WorkFeature from "../../WorkFeature/WorkFeature";
import Banner from "../Banner/Banner";
import "./Home.css";
const Home = () => {
  return (
    <div className="custom-home">
      <Banner></Banner>
      <WorkFeature></WorkFeature>
    </div>
  );
};

export default Home;
