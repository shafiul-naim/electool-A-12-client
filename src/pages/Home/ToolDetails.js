import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const ToolDetails = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const { toolId } = useParams();
  const [tool, setTool] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/tools/${toolId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [toolId]);

  const quantityRef = useRef();
  const [disable, setDisable] = useState(false);

  const handleDisable = () => {
    let quantity = quantityRef.current.value;
    console.log(quantity);

    if (
      quantity < parseInt(tool.minimumQuantity) ||
      quantity > parseInt(tool.maximumQuantity)
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
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
            value={user?.displayName}
            disabled
            class="my-2 input input-bordered w-full max-w-xs "
          />
          <input
            type="text"
            value={user?.email}
            disabled
            class="my-2 input input-bordered w-full max-w-xs "
          />
          <input
            type="text"
            placeholder="Your Address"
            class="my-2 input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Phone"
            class="my-2 input input-bordered w-full max-w-xs "
          />
          
          <label class="label">
            <span class="label-text">
              Available quantity: {tool.maximumQuantity}
            </span>
          </label>
          <input
            ref={quantityRef}
            onChange={handleDisable}
            type="number"
            class="my-2 input input-bordered w-full max-w-xs "
          />

          <label class="label">
            {quantityRef?.current?.value < parseInt(tool.minimumQuantity) && (
              <span className="label-text-alt text-red-500">
                Minimum order: {tool.minimumQuantity}
              </span>
            )}
          </label>
          <label class="label">
            {quantityRef?.current?.value > parseInt(tool.maximumQuantity) && (
              <span className="label-text-alt text-red-500">
                Can not order more than: {tool.maximumQuantity}
              </span>
            )}
          </label>

          <button
            disabled={disable}
            class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white  w-full max-w-xs"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolDetails;
