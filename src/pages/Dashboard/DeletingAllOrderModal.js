import React from 'react';
import { toast } from 'react-toastify';

const DeletingAllOrderModal = ({ deletingOrder, allOrder, setDeletingOrder, setAllOrders }) => {


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
              const remainingOrder = allOrder.filter((o) => o._id !== _id);
              setAllOrders(remainingOrder);
            }
          });
      };



    return (
        <div>
        <input type="checkbox" id="delete-allOrder-confirm-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg text-red-500">
              Are you sure you want to delete ${productName}!
            </h3>
            <p class="py-4">
              If you delete this, it will be deleted permanently.
            </p>
            <div class="modal-action">
              <button onClick={() => handleDelete()} class="btn btn-xs btn-error">
                Delete
              </button>
              <label for="delete-allOrder-confirm-modal" class="btn btn-xs">
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DeletingAllOrderModal;