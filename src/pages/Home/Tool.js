import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const {
    _id,
    name,
    img,
    description,
    minimumQuantity,
    availableQuantity,
    ppu,
  } = tool;

  const navigate = useNavigate();
  const navigateToToolDetails = (id) => {
    navigate(`/tool/${id}`);
  };
  return (
    <div className="card  bg-base-100 shadow-xl lg:w-10/12 lg:px-12 sm:w-full sm:px-2">
      <figure>
        <img src={img} alt="Album" className=" object-contain h-40 w-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-neutral">
          {name}
          <div className="badge badge-accent text-white">NEW</div>
        </h2>
        <p className="text-gray-500">{description}</p>
        <p className="text-4xl font-bold text-neutral-focus text-opacity-90">
          $ {ppu}
        </p>
        <p className="text-lg">
          Minimum order quantity:{" "}
          <span className="text-3xl text-neutral-focus">{minimumQuantity}</span>
        </p>
        <p className="text-lg">
          Available quantity:{" "}
          <span className="text-3xl text-neutral-focus">
            {availableQuantity}
          </span>
        </p>
        <button
          onClick={() => navigateToToolDetails(_id)}
          className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
        >
          Purchase
        </button>
        <div className="card-actions justify-end mt-3">
          <div className="badge badge-outline">Electric</div>
          <div className="badge badge-outline">Tools</div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
