import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeletingModal from "./DeletingModal";
import ShowProducts from "./ShowProducts";

const ManageProducts = () => {
  const [deletingProduct, setDeletingProduct] = useState(null);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("https://shrouded-mountain-11163.herokuapp.com/tools", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2>your products: {products.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Available quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ShowProducts
                key={product._id}
                product={product}
                index={index}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
              ></ShowProducts>
            ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && (
        <DeletingModal
          deletingProduct={deletingProduct}
          refetch={refetch}
          setDeletingProduct={setDeletingProduct}
        ></DeletingModal>
      )}
    </div>
  );
};

export default ManageProducts;
