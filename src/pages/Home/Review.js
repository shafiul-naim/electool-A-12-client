import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ShowReview from "./ShowReview";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://shrouded-mountain-11163.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="sm:px-6 px-12 max-w-7xl mx-auto  mt-48">
      <h1 className="text-5xl text-center text-primary font-bold ">
        WHAT OUR USERS SAY!
      </h1>
      <div className=" grid sm:grid-cols-1 lg:grid-cols-3 gap-5 my-16 ">
        {reviews.map((review) => (
          <ShowReview key={review._id} review={review}></ShowReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
