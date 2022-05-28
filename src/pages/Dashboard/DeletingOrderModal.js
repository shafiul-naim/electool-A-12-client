import React from "react";
import { toast } from "react-toastify";

const DeletingOrderModal = ({ deletingOrder, order, setDeletingOrder, setOrders }) => {

    const {_id, productName} = deletingOrder;


    const handleDelete = () => {
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            }
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              toast.success(`Tool: ${productName} is deleted.`);
              setDeletingOrder(null);
              const remainingOrder = order.filter((o) => o._id !== _id);
              setOrders(remainingOrder);
            }
          });
      };



  return (
  <div>
  <input type="checkbox" id="delete-order-confirm-modal" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="font-bold text-lg text-red-500">
        Are you sure you want to delete ${productName}!
      </h3>
      <p class="py-4">
        You've been selected for a chance to get one year of subscription to
        use Wikipedia for free!
      </p>
      <div class="modal-action">
        <button onClick={() => handleDelete()} class="btn btn-xs btn-error">
          Delete
        </button>
        <label for="delete-order-confirm-modal" class="btn btn-xs">
          Cancel
        </label>
      </div>
    </div>
  </div>
</div>
);
};

export default DeletingOrderModal;