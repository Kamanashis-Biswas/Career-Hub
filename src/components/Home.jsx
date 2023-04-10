import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobCategoryCard from "./Card/JobCategoryCard";
import manImg from "../assets/All_Images/P3OLGJ1.png";
import AllJobCard from "./Card/AllJobCard";

const Home = () => {
  const jobCategoryList = useLoaderData();
  const [jobList, setJobList] = useState();
  useEffect(() => {
    fetch("../../public/job_list.json")
      .then((res) => res.json())
      .then((data) => setJobList(data));
  }, []);
  return (
    <div>
      {/* Bannar */}
      <div className="bg-cyan-100">
        <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative md:flex">
          <div className="md:w-1/2">
            <h2 className="font-extrabold text-[50px] md:text-[80px]">
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
            <img className="h-full" src={manImg} alt="image" />
          </div>
        </div>
      </div>
      {/* Job Category list */}
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div>
          <h2 className="font-extrabold text-5xl text-center mt-32">
            Job Category List
          </h2>
          <p className="text-center mb-8 mt-4 text-gray-500">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {jobCategoryList.map((jobCategory) => (
              <JobCategoryCard key={jobCategory.id} jobCategory={jobCategory} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 py-5 mx-auto mt-60 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4">
          {jobList &&
            jobList.map((job) => <AllJobCard key={job.id} job={job} />)}
        </div>
        <div className="text-center">
          <button className="bg-indigo-500 w-[190px] h-[65px] font-bold rounded text-white mt-7">
            See All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
