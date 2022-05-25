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

  const handlePurchase = (event) => {
    event.preventDefault();
    const purchase = {
      name: user.displayName,
      email: user.email,
      address: event.target.address.value,
      phone: event.target.phone.value,
      orderQuantity: event.target.orderQuantity.value,
    };
    console.log(purchase);

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchase),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("order places successfully");
      });
  };

  return (
    <div className="grid lg:grid-cols-2 sm:grid-rows-2 lg:h-screen my-5">
      <div className="w-1/2 mx-auto pt-8">
        <img src={tool.img} alt="..." className="max-w-1/2 rounded-lg " />
        <h2 class="card-title mt-5 text-primary">{tool.name}</h2>
        <p className="mb-5">{tool.description}</p>
        <p className="text-xl">
          Price per unit: <strong>{tool.ppu}</strong>
        </p>
      </div>
      <div className="w-4/5 mx-auto pt-8">
        <div class="  bg-base-100 ">
          <div class="items-center text-center">
            <form onSubmit={handlePurchase}>
              <input
                type="text"
                value={user?.displayName}
                disabled
                class="my-3 input input-bordered w-full  "
              />
              <input
                type="text"
                value={user?.email}
                disabled
                class="my-3 input input-bordered w-full  "
              />
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                class="my-3 input input-bordered w-full "
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                class="my-3 input input-bordered w-full  "
              />

              <label class="label">
                <span class="label-text">
                  Available quantity: {tool.maximumQuantity}
                </span>
              </label>
              <label class="label">
                <span class="label-text">
                  Enter how many you want
                </span>
              </label>
              <input
                name="orderQuantity"
                ref={quantityRef}
                onChange={handleDisable}
                type="number"
                class="my-3 input input-bordered w-full  "
              />

              <label class="label">
                {quantityRef?.current?.value <
                  parseInt(tool.minimumQuantity) && (
                  <span className="label-text-alt text-red-500">
                    Minimum order: {tool.minimumQuantity}
                  </span>
                )}
              </label>
              <label class="label">
                {quantityRef?.current?.value >
                  parseInt(tool.maximumQuantity) && (
                  <span className="label-text-alt text-red-500">
                    Can not order more than: {tool.maximumQuantity}
                  </span>
                )}
              </label>

              <button
                disabled={disable}
                class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white  w-full "
              >
                Purchase
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetails;
