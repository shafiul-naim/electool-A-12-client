import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [order, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const email = user.email;
    console.log(user);
    const url = `http://localhost:5000/orders?email=${email}`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        console.log("res", res);
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => setOrders(data));
  }, [user]);
  return (
    <div className="overflow-x-auto">
      <table className="table table-active w-full">
        <thead>
          <tr>
            <th className="text-lg font-bold text-neutral"></th>
            <th className="text-lg font-bold text-neutral">Product Name</th>
            <th className="text-lg font-bold text-neutral">Ordered quantity</th>
            <th className="text-lg font-bold text-neutral">Total Price</th>
            <th className="text-lg font-bold text-neutral">Payment</th>
            <th className="text-lg font-bold text-neutral">Cancel order</th>
          </tr>
        </thead>
        <tbody>
          {order.map((o, index) => (
            <tr key={o._id}>
              <th>{index + 1}</th>
              <td className="text-lg text-stone-500">{o.productName}</td>
              <td className="text-lg text-stone-500">{o.orderQuantity}</td>
              <td className="text-lg text-stone-500">{o.totalPrice}</td>

              <td className="text-lg text-stone-500">
                {o.totalPrice && !o.paid && (
                  <Link to={`/dashboard/payment/${o._id}`}>
                    {" "}
                    <button className="btn btn-outline btn-warning">
                      Payment
                    </button>
                  </Link>
                )}
                {o.totalPrice && o.paid && (
                  <span className="text-green-500">
                  Paid
                </span>
                )}
              </td>
              <td className="text-lg text-stone-500">
                <button className="btn btn-outline btn-secondary">
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
