import React from "react";
import banner from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-100 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} className="max-w-sm rounded-lg "  alt=""/>
    <div>
      <h1 className="text-5xl font-bold">Hello there !</h1>
      <p className="py-6 pe-4 ">We manufacture best electronic items.</p>
      
    </div>
  </div>
</div>
  );
};

export default Banner;
