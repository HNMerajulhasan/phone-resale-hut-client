import React from "react";
import image from "../../assets/banner-Image.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-green-700 w-full">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 grid-flow-row-dense">
          <img src={image} className=" rounded-lg shadow-2xl" alt="" />
          <div className="text-white">
            <h1 className="text-4xl font-bold">
             WelCome To You Number One Phone Resale Platform in The Country
            </h1>
            <p className="py-6">
              Welcome To Phone Resale bazae,Here , We Only Provide Best And Authentic Used
              Mobile.
            </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
