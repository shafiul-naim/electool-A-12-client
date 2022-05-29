import React from "react";

const ShowProducts = ({ product, refetch, index, setDeletingProduct }) => {
  const { name, availableQuantity, img } = product;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="product" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>{availableQuantity}</td>
      <td>
        <label
          onClick={() => setDeletingProduct(product)}
          htmlFor="delete-confirm-modal"
          className="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ShowProducts;
