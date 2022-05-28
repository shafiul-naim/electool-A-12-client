import React from "react";

const Loading = () => {
  return (
    <>
      
      <div className="flex items-center justify-center space-x-2 animate-bounce mt-48">
        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
        <div className="w-8 h-8 bg-green-400 rounded-full"></div>
        <div className="w-8 h-8 bg-black rounded-full"></div>
      </div>
      <h2 className="text-2xl text-blue-500 text-center mt-6">It's Loading 
        <span className="text-3xl text-warning"> PLEASE WAIT!!</span>
      </h2>
    </>
  );
};

export default Loading;
