import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
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
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Ordered quantity</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {order.map((o, index) => (
            <tr key={o._id}>
              <th>{index + 1}</th>
              <td>{o.productName}</td>
              <td>{o.orderQuantity}</td>
              <td>{o.price}/u</td>
              <td>
                <button className="btn btn-outline btn-error">Cancel</button>
              </td>
              <td>
                <button className="btn btn-outline btn-info">Payment</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
