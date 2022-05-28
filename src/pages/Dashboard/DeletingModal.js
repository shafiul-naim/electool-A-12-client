import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const DeletingModal = ({ deletingProduct, refetch, setDeletingProduct }) => {
  const { name, _id } = deletingProduct;

 console.log("id",_id)
  
  const handleDelete = () => {
    fetch(`https://shrouded-mountain-11163.herokuapp.com/tools/${_id}`, {
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
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
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
