import React from "react";

const ShowProducts = ({ product, refetch }) => {
  return (
      <tr>
        <th>1</th>
        <td>{product.name}</td>
        <td></td>
        <td>
          <button className="btn btn-xs">Delete products</button>
        </td>
      </tr>
  );
};

export default ShowProducts;
