import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("data", data.rating);

   

    const review = {
      name: data.name,
      description: data.description,
      rating: data.rating,
    };

    const url = `https://shrouded-mountain-11163.herokuapp.com/reviews`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    toast.success("Review added successfully");
  };

  return (
    <div className=" min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Give us your valuable review about us</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form
              className="d-flex flex-column mb-3 w-75 mx-auto"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="mb-3 rounded-pill p-2 border-0"
                placeholder="Name"
                {...register("name")}
              />
              <input
                placeholder="your opinion"
                className="mb-3 rounded-pill p-2 border-0"
                required
                {...register("description")}
              />
              <input
                placeholder="Rating"
                className="mb-3 rounded-pill p-2 border-0"
                type="number"
                {...register("rating", {
                  min: 1,
                  max: 5,
                  
                })}
              />

              <input
                className="btn w-full max-w-xs text-white"
                type="submit"
                value="Add Review"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
