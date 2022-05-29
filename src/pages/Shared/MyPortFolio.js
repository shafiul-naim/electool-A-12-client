import React from "react";
import profile from "../../images/profile.jpg";
import skill from "../../images/skills.png";
import coding from "../../images/coding.png";

const MyPortFolio = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6 text-xl">
              My Name is{" "}
              <span className="text-secondary text-2xl">Shafiul Islam</span> . I
              am a student of Computer Science and Engineering. My specialty is
              Web Development. At my early age of uni student life i was very
              interested. Since then it has become my passion.
            </p>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-100 p-16">
        <div className="hero-content flex-col lg:flex-row lg:gap-48">
          <img className="w-96 lg:h-96" src={profile} alt="" />
          <div>
            <h1 className="text-5xl font-bold">Shafiul Islam</h1>
            <p className="pt-6 pb-3 text-2xl text-gray-600">
              shafiul.naim@gmail.com
            </p>
            <p className="pt-6 pb-3 text-2xl text-gray-600">B.Sc. in CSE</p>
            <p className="pt-6 pb-3 text-2xl text-gray-600">
              Metropolitan University
            </p>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-100 p-16">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-48">
          <img src={skill} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Skills</h1>
            <p className="pt-6 text-sm text-gray-600">HTML5</p>
            <p className="pt-2  text-sm text-gray-600">CSS3</p>
            <p className="pt-2  text-sm text-gray-600">JAVASCRIPT</p>
            <p className="pt-2  text-sm text-gray-600">REACT</p>
            <p className="pt-2  text-sm text-gray-600">HEROKU</p>
            <p className="pt-2  text-sm text-gray-600">NODE.JS</p>
            <p className="pt-2  text-sm text-gray-600">MONGODB</p>
            <p className="pt-2  text-sm text-gray-600">FIREBASE</p>
            <p className="pt-2  text-sm text-gray-600">TAILWIND</p>
            <p className="pt-2  text-sm text-gray-600">EXPRESS</p>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row gap-48">
          <img src={coding} alt="" />
          <div>
            <h1 className="text-5xl font-bold">My projects</h1>

            <div className="pt-6 ">
              <p className="pt-2">
                <a href="https://warehouse-management-a-11.web.app/">
                  BOOK KEEPER
                </a>
                <br />
              </p>
              <p className="pt-2">
                {" "}
                <a href="https://assignment-10-1e27c.web.app/">PHOTOSPORTS</a>
                <br />
              </p>
              <p className="pt-2">
                <a href="https://graceful-mochi-482b57.netlify.app/">
                  CYCLE ARCHIVE
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortFolio;
