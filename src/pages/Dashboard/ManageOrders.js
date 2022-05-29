import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import DeletingAllOrderModal from './DeletingAllOrderModal';

const ManageOrders = () => {
    const [allOrder, setAllOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [deletingOrder, setDeletingOrder] = useState(null);

  useEffect(() => {
    const email = user.email;
    console.log(user);
    const url = `https://shrouded-mountain-11163.herokuapp.com/allOrders`;
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
      .then((data) => setAllOrders(data));
  }, []);
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
          {allOrder.map((o, index) => (
            <tr key={o._id}>
              <th>{index + 1}</th>
              <td className="text-lg text-stone-500">{o.productName}</td>
              <td className="text-lg text-stone-500">{o.orderQuantity}</td>
              <td className="text-lg text-stone-500">{o.totalPrice}</td>

              <td className="text-lg text-stone-500">
               
                {o.paid && (
                  <div>
                    <p>
                      <span className="text-green-500 font-bold">Paid</span>
                    </p>
                    <p className="text-neutral text-xs">
                      Order id:{" "}
                      <span className="text-neutral text-xs">
                        {o.transactionId}
                      </span>
                    </p>
                  </div>
                )}
                {!o.paid && (
                  <div>
                    <p>
                      <span className="text-green-500 font-bold">Unpaid</span>
                    </p>
                    
                  </div>
                )}
              </td>

              <td className="text-lg text-stone-500">
                {!o.paid && (
                  <label
                    onClick={() => setDeletingOrder(o)}
                    htmlFor="delete-allOrder-confirm-modal"
                    className="btn btn-xs btn-error"
                  >
                    Cancel
                  </label>
                )}
              

              
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {deletingOrder && (
        <DeletingAllOrderModal
          allOrder={allOrder}
          setAllOrders={setAllOrders}
          deletingOrder={deletingOrder}
          setDeletingOrder={setDeletingOrder}
        ></DeletingAllOrderModal>
      )}
    </div>
    );
};

export default ManageOrders;