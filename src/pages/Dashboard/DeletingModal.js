import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const DeletingModal = ({ deletingProduct, refetch, setDeletingProduct }) => {
  const { name, _id } = deletingProduct;

 console.log("id",_id)
  
  const handleDelete = () => {
    fetch(`http://localhost:5000/tools/${_id}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Tool: ${name} is deleted.`);
          setDeletingProduct(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete ${name}!
          </h3>
          <p className="py-4">
          If you delete this, it will be deleted permanently.
          </p>
          <div className="modal-action">
            <button onClick={() => handleDelete()} className="btn btn-xs btn-error">
              Delete
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletingModal;
