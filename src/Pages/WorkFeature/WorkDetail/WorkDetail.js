import React from "react";
import pic1 from "../../../Asset/bookpic/pic1.JPG";
import pic2 from "../../../Asset/bookpic/pic2.JPG";
import pic3 from "../../../Asset/bookpic/pic3.JPG";

const WorkDetail = () => {
  return (
    <div
      className="p-5 lg:flex text-gray-300 lg:h-full lg:justify-between lg:items-center"
      style={{ backgroundColor: "#1D1D1D" }}
    >
      <div className="lg:w-1/2 m-5">
        <h2 className="text-3xl text-gray-300">Project Info</h2>
        <p className="text-4xl mb-5 text-gray-300">Name:Book Resale</p>
        <ul className="m-5" style={{ backgroundColor: "#1D1D1D" }}>
          <li className="border-none text-gray-400">
            This is Single page and full stack website.
          </li>
          <li className="border-none text-gray-400">
            Added firebase authentication login and for registration.
          </li>
          <li className="border-none text-gray-400">
            Developed admin, seller and Buyer user base dashboard.
          </li>
          <li className="border-none text-gray-400">
            Counld be ordering book, can see booked Items and delete order.
          </li>
          <p className="border-none text-gray-400 my-2">
            <span className="text-2xl font-bold">Technology:</span>
            <button className="border p-1 m-1">CSS</button>
            <button className="border p-1 m-1">Javascript</button>
            <button className="border p-1 m-1">React</button>
            <button className="border p-1 m-1">Node.js</button>
            <button className="border p-1 m-1">MongoDB</button>
          </p>
        </ul>
        <div>
          <a href="https://aradun-book-resale.web.app/" target="blank">
            <button className="btn btn-outline btn-primary">Live Site</button>
          </a>
          <a
            href="https://github.com/AMAscientist5/book-resale-client-repo"
            target="blank"
          >
            <button className="btn btn-outline btn-secondary mx-1">
              Client code
            </button>
          </a>
          <a
            href="https://github.com/AMAscientist5/book-resale-server-repo"
            target="blank"
          >
            <button className="btn btn-outline btn-accent">Server Code</button>
          </a>
        </div>
      </div>
      <div className="lg:w-1/2">
        <div>
          <img src={pic1} alt="" />
        </div>
        <div className="lg:flex">
          <div>
            <img src={pic2} alt="" />
          </div>
          <div>
            <img className="pb-7" src={pic3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
