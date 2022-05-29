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
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete ${name}!
          </h3>
          <p class="py-4">
          If you delete this, it will be deleted permanently.
          </p>
          <div class="modal-action">
            <button onClick={() => handleDelete()} class="btn btn-xs btn-error">
              Delete
            </button>
            <label for="delete-confirm-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletingModal;
