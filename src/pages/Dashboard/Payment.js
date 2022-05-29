import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L414ZGERQn2bCbpsAH9MTzBnfAYRiLP7H7gALLYbtIZ41aa4nXWsttYs7lPOHSNm0G0OVKrCJN8p8HfDGKkEYBn00IfXxgWfv"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/orders/${id}`;

  const { data: orders, isLoading } = useQuery(["orders", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div class="hero  bg-base-200 py-12 mt-2">
        <div class="hero-content flex-col ">
          <div class="card w-full max-w-md  bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">
                Pay for{" "}
                <span className="text-3xl text-secondary">
                  {orders.productName}
                </span>
              </h2>
              <p className="text-xl text-gray-500 my-2">
                Ordered quantity{" "}
                <span className="text-2xl text-primary">
                  {orders.orderQuantity}
                </span>
              </p>
              <p className="text-xl text-gray-500 ">
                Price per unit{" "}
                <span className="text-2xl text-primary">${orders.price}</span>
              </p>
              <p className="text-xl mt-2 text-neutral">
                Please pay{" "}
                <span className="text-3xl text-primary">
                  ${orders.totalPrice}
                </span>
              </p>
            </div>
          </div>
          <div class="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm orders={orders} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
