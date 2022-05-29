import React from 'react';
import { toast } from 'react-toastify';

const DeletingAllOrderModal = ({ deletingOrder, allOrder, setDeletingOrder, setAllOrders }) => {


    const {_id, productName} = deletingOrder;



    const handleDelete = () => {
        fetch(`https://shrouded-mountain-11163.herokuapp.com/orders/${_id}`, {
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
        <input type="checkbox" id="delete-allOrder-confirm-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-red-500">
              Are you sure you want to delete ${productName}!
            </h3>
            <p className="py-4">
              If you delete this, it will be deleted permanently.
            </p>
            <div className="modal-action">
              <button onClick={() => handleDelete()} className="btn btn-xs btn-error">
                Delete
              </button>
              <label htmlFor="delete-allOrder-confirm-modal" className="btn btn-xs">
                Cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DeletingAllOrderModal;