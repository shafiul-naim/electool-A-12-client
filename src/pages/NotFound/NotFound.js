import React from "react";
import error from "../../images/404.png";

const NotFound = () => {
  return (
    <section className="flex justify-center items-center  px-12 max-w-7xl mx-auto my-16">
      <div className="flex-1 hidden lg:block">
        <img className="w-96 h-96" src={error} alt="" />
      </div>
      <div className="flex-1 py-2">
        <h3 className="text-3xl text-primary font-bold">404</h3>
        <h3 className="text-5xl text-primary pb-5 pt-2">Page not found</h3>
        
      
      </div>
    </section>
  );
};

export default NotFound;
