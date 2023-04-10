import React from "react";

const Home = () => {
  return (
    <div>
      {/* Bannar */}
      <div className="bg-cyan-100">
        <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative md:flex">
          <div className="md:w-1/2">
            <h2 className="font-extrabold text-[80px]">
              One Step Closer To Your{" "}
              <span className="text-blue-600">Dream Job</span>
            </h2>
            <p className="text-gray-500">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="bg-indigo-500 w-[190px] h-[65px] font-bold rounded text-white mt-7">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            <img className="h-full" src="All_Images/P3OLGJ1.png" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
