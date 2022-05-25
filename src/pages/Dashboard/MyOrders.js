import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [order, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const email = user.email;
    console.log(user);
    const url = `http://localhost:5000/orders?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  return (
    <div class="overflow-x-auto">
      <table class="table table-zebra w-full">
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
        {
            order.map((o, index) => <tr key={o._id}>
                <th>{index+1}</th>
                <td>{o.productName}</td>
                <td>{o.orderQuantity}</td>
                <td>{o.price}/u</td>
                <td><button class="btn btn-outline btn-error">Cancel</button></td>
                <td><button class="btn btn-outline btn-info">Payment</button></td>
              </tr>)
        }
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
