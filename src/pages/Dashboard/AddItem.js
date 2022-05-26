import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const AddItem = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user] = useAuthState(auth);

  /*   const { data: tool, isLoading } = useQuery("tool", () =>
    fetch("http://localhost:5000/tools").then((res) => res.json())
  ); */

  //   const imageStorageKey = "760f0cdbf1bab278fa3c8bacb7c49ce2";

  const onSubmit = async (data) => {
    console.log("data", data);

    const tool = {
      name: data.name,
      description: data.description,
      minimumQuantity: data.minimumQuantity,
      ppu: data.ppu,
      img: data.img,
      availableQuantity: data.availableQuantity,
    };

    const url = `http://localhost:5000/tools`;

    fetch(url, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(tool)
    })
    .then( res => res.json())
    .then( result => {
        console.log(result);
    })
    toast.success('Item added successfully')

    /* const img = data.img[0];
    console.log("img", img);
    const formData = new FormData();
    const test = formData.append("img", img);
    console.log("test", test);



    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    console.log("url", url); */

    /*  fetch(url, {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then( result => {
        console.log('imgbb result', result)
    }) */
  };

  /*   if (isLoading) {
    return <Loading></Loading>;
  }
 */
  return (
    <div className="hero min-h-screen bg-neutral">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="lg:text-5xl  font-bold text-gray-100">Add a Item!</h1>
          <p className="px-6 py-6 lg:text-2xl text-gray-300">
            Add a product with proper information
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form
              className="d-flex flex-column mb-3 w-75 mx-auto"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="mb-3 rounded-pill p-2 border-0"
                value={user?.email}
                {...register("email")}
              />
              <input
                placeholder="Tool Name"
                className="mb-3 rounded-pill p-2 border-0"
                required
                {...register("name", { required: true, maxLength: 20 })}
              />
              <textarea
                placeholder="Description"
                className="mb-3 rounded-pill p-2 border-0"
                required
                {...register("description")}
              />
              <input
                placeholder="Price per unit"
                className="mb-3 rounded-pill p-2 border-0"
                required
                type="number"
                {...register("ppu")}
              />
              <input
                placeholder="Minimum order quantity"
                className="mb-3 rounded-pill p-2 border-0"
                type="number"
                required
                {...register("minimumQuantity")}
              />
              <input
                placeholder="Available quantity"
                className="mb-3 rounded-pill p-2 border-0"
                required
                {...register("availableQuantity")}
              />

              <input
                className="mb-3 rounded-pill p-2 border-0"
                placeholder="Photo URL"
                required
                type="text"
                {...register("img")}
              />

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
  );
};

export default AddItem;

// {<form onSubmit={handleSubmit(onSubmit)}>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Your name"
//                   className="input input-bordered w-full max-w-xs"
//                   {...register("name", {
//                     required: {
//                       value: true,
//                       message: "Name is required",
//                     },
//                   })}
//                 />
//                 <label className="label">
//                   {errors.name?.type === "required" && (
//                     <span className="label-text-alt text-red-500">
//                       {" "}
//                       {errors.name.message}
//                     </span>
//                   )}
//                 </label>
//               </div>
//               <div className="form-control w-full max-w-xs">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="input input-bordered w-full max-w-xs"
//                   {...register("email", {
//                     required: {
//                       value: true,
//                       message: "Email is required",
//                     },
//                     pattern: {
//                       value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
//                       message: "error message",
//                     },
//                   })}
//                 />
//                 <label className="label">
//                   {errors.email?.type === "required" && (
//                     <span className="label-text-alt text-red-500">
//                       {" "}
//                       {errors.email.message}
//                     </span>
//                   )}

//                   {errors.email?.type === "pattern" && (
//                     <span className="label-text-alt text-red-500">
//                       {errors.email.message}
//                     </span>
//                   )}
//                 </label>
//               </div>

//               <div className="form-control w-full max-w-xs">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="password"
//                   className="input input-bordered w-full max-w-xs"
//                   {...register("password", {
//                     required: {
//                       value: true,
//                       message: "password is required",
//                     },
//                     minLength: {
//                       value: 6,
//                       message: "Must be 6 characters or longer",
//                     },
//                   })}
//                 />

//                 <label className="label">
//                   {errors.password?.type === "required" && (
//                     <span className="label-text-alt text-red-500">
//                       {errors.password.message}
//                     </span>
//                   )}

//                   {errors.password?.type === "minLength" && (
//                     <span className="label-text-alt text-red-500">
//                       {errors.password.message}
//                     </span>
//                   )}
//                 </label>
//               </div>

//   <input
//     className="btn w-full max-w-xs text-white"
//     type="submit"
//     value="Add Item"
//   />
//             </form>}
