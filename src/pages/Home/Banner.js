import React from "react";
import banner from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-base-100">
  <div class="hero-content flex-col lg:flex-row">
    <img src={banner} alt="banner" className="max-w-sm rounded-lg shadow-2xl"  />
    <div>
      <h1 class=" text-5xl text-secondary font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
    </div>
  </div>
</div>
  );
};

export default Banner;
