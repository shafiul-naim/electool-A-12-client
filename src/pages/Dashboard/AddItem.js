import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("data", data);
  };
  return (

<div className="hero min-h-screen bg-neutral">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="lg:text-5xl  font-bold text-gray-100">Add a Item!</h1>
      <p className="px-6 py-6 lg:text-2xl text-gray-300">Add a product with proper information</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {" "}
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "error message",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {" "}
                      {errors.email.message}
                    </span>
                  )}

                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />

                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}

                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="btn w-full max-w-xs text-white"
                type="submit"
                value="Add Item"
              />
            </form>
      </div>
    </div>
  </div>
</div>


    // <>
    //   <h2 className="text-center text-2xl font-bold my-8">Add a Product</h2>
    //   <div className="flex  justify-center items-center lg:w-8/12 sm:w-full mx-auto ">
    //     <div className="card  lg:w-full bg-base-100 shadow-xl">
    //       <div className="card-body lg:w-full">
            // <form onSubmit={handleSubmit(onSubmit)}>
            //   <div className="form-control">
            //     <label className="label">
            //       <span className="label-text">Name</span>
            //     </label>
            //     <input
            //       type="text"
            //       placeholder="Your name"
            //       className="input input-bordered w-full max-w-xs"
            //       {...register("name", {
            //         required: {
            //           value: true,
            //           message: "Name is required",
            //         },
            //       })}
            //     />
            //     <label className="label">
            //       {errors.name?.type === "required" && (
            //         <span className="label-text-alt text-red-500">
            //           {" "}
            //           {errors.name.message}
            //         </span>
            //       )}
            //     </label>
            //   </div>
            //   <div className="form-control w-full max-w-xs">
            //     <label className="label">
            //       <span className="label-text">Email</span>
            //     </label>
            //     <input
            //       type="email"
            //       placeholder="Your email"
            //       className="input input-bordered w-full max-w-xs"
            //       {...register("email", {
            //         required: {
            //           value: true,
            //           message: "Email is required",
            //         },
            //         pattern: {
            //           value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
            //           message: "error message",
            //         },
            //       })}
            //     />
            //     <label className="label">
            //       {errors.email?.type === "required" && (
            //         <span className="label-text-alt text-red-500">
            //           {" "}
            //           {errors.email.message}
            //         </span>
            //       )}

            //       {errors.email?.type === "pattern" && (
            //         <span className="label-text-alt text-red-500">
            //           {errors.email.message}
            //         </span>
            //       )}
            //     </label>
            //   </div>

            //   <div className="form-control w-full max-w-xs">
            //     <label className="label">
            //       <span className="label-text">Password</span>
            //     </label>
            //     <input
            //       type="password"
            //       placeholder="password"
            //       className="input input-bordered w-full max-w-xs"
            //       {...register("password", {
            //         required: {
            //           value: true,
            //           message: "password is required",
            //         },
            //         minLength: {
            //           value: 6,
            //           message: "Must be 6 characters or longer",
            //         },
            //       })}
            //     />

            //     <label className="label">
            //       {errors.password?.type === "required" && (
            //         <span className="label-text-alt text-red-500">
            //           {errors.password.message}
            //         </span>
            //       )}

            //       {errors.password?.type === "minLength" && (
            //         <span className="label-text-alt text-red-500">
            //           {errors.password.message}
            //         </span>
            //       )}
            //     </label>
            //   </div>

            //   <input
            //     className="btn w-full max-w-xs text-white"
            //     type="submit"
            //     value="Add Item"
            //   />
            // </form>
    //       </div>
    //     </div>
    //   </div>
    // 
  );
};

export default AddItem;
