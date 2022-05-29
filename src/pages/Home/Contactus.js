import React from "react";
import contact from '../../images/contact.jpg'

const Contactus = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
       
        <div>
          <h1 className="text-2xl font-bold text-primary">CONTACT US!</h1>
          <p className="py-6 text-xl">
         If you have any problem or if you want know anything or ask anything feel free to contact us
          </p>
         <div className="flex flex-col">
         <input type="text" placeholder="Name" className="input input-bordered input-secondary w-full max-w-xs my-2" />
          <input type="email" placeholder="Email" className="input input-bordered input-secondary w-full max-w-xs mb-2" />
          <textarea className="textarea textarea-primary w-3/5 mb-4" placeholder="Your message"></textarea>
         </div>
          <button className="btn btn-primary">Contact</button>
        </div>
        <img
          src={contact}
          className="max-w-sm rounded-lg shadow-2xl" alt="contact"
        />
      </div>
    </div>
  );
};

export default Contactus;
