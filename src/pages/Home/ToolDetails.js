import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const ToolDetails = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const { toolId } = useParams();
  const [tool, setTool] = useState([]);
  const quantityRef = useRef();
  useEffect(() => {
    const url = `http://localhost:5000/tools/${toolId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [toolId]);

  const [disable, setDisable] = useState(false);
  const handlePurchase = () => {
    const quantity = quantityRef.current.value;
    if (
      quantity < parseInt(tool.minimumQuantity) ||
      quantity > parseInt(tool.maximumQuantity)
    ) {
      setDisable(true);
    } 
  };

  const handleDisable = () => {
    setDisable(false);
  };
  return (
    <div class="hero min-h-screen bg-base-100 px-12">
      <div class="hero-content flex-col lg:flex-row-reverse p-5">
        <img
          src={tool.img}
          alt="..."
          className="max-w-3/5 rounded-lg shadow-xl"
        />
        <div className="flex flex-col">
          <h1 class="text-xl font-bold text-secondary">{tool.name}</h1>
          <p className="">{tool.description}</p>
          <p className="text-xl">Price per unit: {tool.ppu}</p>
          <input
            type="text"
            value={user.displayName}
            disabled
            class="my-2 input input-bordered w-full max-w-xs mx-auto"
          />
          <input
            type="text"
            value={user.email}
            disabled
            class="my-2 input input-bordered w-full max-w-xs mx-auto"
          />
          <input
            type="text"
            placeholder="Your Address"
            class="my-2 input input-bordered w-full max-w-xs mx-auto"
          />
          <input
            type="text"
            placeholder="Phone"
            class="my-2 input input-bordered w-full max-w-xs mx-auto"
          />
          <input
            ref={quantityRef}
            onChange={handleDisable}
            type="number"
            class="my-2 input input-bordered w-full max-w-xs mx-auto"
          />
          <button
            onClick={handlePurchase}
            disabled={disable}
            class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white  mx-auto w-full max-w-xs"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolDetails;
