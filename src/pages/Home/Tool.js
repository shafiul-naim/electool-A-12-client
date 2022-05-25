import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const { _id ,name, img, description, minimumQuantity, maximumQuantity, ppu } = tool;


  const navigate = useNavigate();
  const navigateToToolDetails = (id) => {
    navigate(`/tool/${id}`);
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-9/12 sm:w-full mx-auto">
      <figure>
        <img src={img} alt="Album" className=" lg:w-2/5 sm:w-full" />
      </figure>
      <div className="card-body lg:w-3/5 sm:w-full ">
        <h2 className="card-title text-primary">{name}</h2>
        <p className="">{description}</p>
        <p className="text-xl">Price per unit: {ppu}</p>
        <p className="text-xl">Minimum quantity: {minimumQuantity}</p>
        <p className="text-xl">Available quantity: {maximumQuantity}</p>
        <div className="card-actions justify-end">
          <button onClick={() => navigateToToolDetails(_id)} className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
