import React from "react";

import blog from "../../images/blogging.png";
import blog1 from "../../images/cable cutters.jpg";
import blog2 from "../../images/hacksaws.jpg";

const Ourblog = () => {
  return (
    <div className="max-w-7xl mx-auto  mt-48">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 h-96">
        <div className="p-2">
          <img src={blog} alt="" />
        </div>
        <div className="grid grid-rows-2 px-6 gap-5">
          <div>
            <div className="flex justify-around">
            <h2 className="text-primary text-5xl mb-3">Our Blog</h2>
            <button className="btn btn-outline btn-neutral btn-sm">
              See more
            </button>
            </div>

            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img className="w-24 h-24 p-4" src={blog1} alt="Movie" />
              </figure>

              <div className="card-body">
                <h2 className="card-title">What is cable cutters</h2>
                <p>cable cutter is very useful for cutting cable..</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">READ MORE</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card  card-side bg-base-100 shadow-xl">
              <figure>
                <img className="w-32 h-32 p-4" src={blog2} alt="Movie" />
              </figure>

              <div className="card-body">
                <h2 className="card-title">3 ways to use hacksaws</h2>
                <p>You can use this tool in many ways..</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">READ MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourblog;
