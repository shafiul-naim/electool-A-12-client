import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  // const [profile, setProfile] = useState([]);

  const [user] = useAuthState(auth);
  const email = user.email;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {
    data: profile,
    isLoading,
    refetch,
  } = useQuery("profile", () =>
    fetch(`https://shrouded-mountain-11163.herokuapp.com/user/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  // useEffect(() => {
  //   const url = `https://shrouded-mountain-11163.herokuapp.com/user/${email}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setProfile(data));
  // }, []);

  const onSubmit = async (data) => {
    const updatedProfile = {
      name:user.displayName,
      email: user.email,
      education: data.education,
      address: data.address,
      phone: data.phone,
      linkedin: data.linkedin,
    };

    fetch(`https://shrouded-mountain-11163.herokuapp.com/profile/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ updatedProfile }),
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Update");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully updated`);
        }
      });

    console.log("sdf");
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-6 text-primary">My Profile</h1>
            <h2 className="card-title">Name: {user.displayName}</h2>
            <h2 className="card-title">email: {user.email}</h2>
            <h2 className="card-title">{profile.education}</h2>
            <h2 className="card-title">{profile.address}</h2>
            <h2 className="card-title">{profile.phone}</h2>
            <button className="btn btn-active btn-link">{profile.linkedin}</button>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form
                className="d-flex flex-column mb-3 w-75 mx-auto"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  placeholder="Education"
                  className="mb-3 rounded-pill p-2 border-0"
                  required
                  {...register("education", { required: true, maxLength: 20 })}
                />
                <textarea
                  placeholder="address"
                  className="mb-3 rounded-pill p-2 border-0"
                  required
                  {...register("address")}
                />

                <input
                  placeholder="Phone"
                  className="mb-3 rounded-pill p-2 border-0"
                  type="number"
                  required
                  {...register("phone")}
                />

                <input
                  className="mb-3 rounded-pill p-2 border-0"
                  placeholder="LinkedIn"
                  required
                  type="text"
                  {...register("linkedin")}
                />

                <input
                  className="btn w-full max-w-xs text-white"
                  type="submit"
                  value="Update"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Name: {user.displayName}</h2>
          <h2 className="card-title">email: {profile.email}</h2>
          <h2 className="card-title">{profile.education}</h2>
          <h2 className="card-title">{profile.address}</h2>
          <h2 className="card-title">{profile.phone}</h2>
          <h2 className="card-title">{profile.linkedin}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form
                className="d-flex flex-column mb-3 w-75 mx-auto"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  placeholder="Education"
                  className="mb-3 rounded-pill p-2 border-0"
                  required
                  {...register("education", { required: true, maxLength: 20 })}
                />
                <textarea
                  placeholder="address"
                  className="mb-3 rounded-pill p-2 border-0"
                  required
                  {...register("address")}
                />

                <input
                  placeholder="Phone"
                  className="mb-3 rounded-pill p-2 border-0"
                  type="number"
                  required
                  {...register("phone")}
                />

                <input
                  className="mb-3 rounded-pill p-2 border-0"
                  placeholder="LinkedIn"
                  required
                  type="text"
                  {...register("linkedin")}
                />

                <input
                  className="btn w-full max-w-xs text-white"
                  type="submit"
                  value="Update"
                />
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MyProfile;
