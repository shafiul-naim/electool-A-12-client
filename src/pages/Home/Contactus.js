import React from "react";
import contact from '../../images/contact.jpg'

const Contactus = () => {
  return (
    <div class="hero min-h-screen bg-base-100">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src={contact}
          className="max-w-sm rounded-lg shadow-2xl" alt="contact"
        />
        <div>
          <h1 class="text-5xl font-bold text-primary">CONTACT US!</h1>
          <p class="py-6 text-xl">
         If you have any problem or if you want know anything or ask anything feel free to contact us
          </p>
          <button class="btn btn-primary">COntact</button>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
