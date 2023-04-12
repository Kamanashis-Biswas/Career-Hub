import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobCategoryCard from "./Card/JobCategoryCard";
import AllJobCard from "./Card/AllJobCard";

const Home = () => {
  const [jobCList, setJobCList] = useState();
  useEffect(() => {
    fetch("job_category_list.json")
      .then((res) => res.json())
      .then((data) => setJobCList(data));
  }, []);

  const [jobList, setJobList] = useState();
  useEffect(() => {
    fetch("job_list.json")
      .then((res) => res.json())
      .then((data) => setJobList(data));
  }, []);

  const [btnClick, setBtnClick] = useState(false);

  return (
    <div>
      {/* Bannar */}
      <div className="bg-cyan-100">
        <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative md:flex">
          <div className="md:w-1/2">
            <h2 className="font-extrabold text-[50px] md:text-[80px]">
              One Step Closer To Your
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
            <img
              className="h-full"
              src="https://i.ibb.co/wzwyR8h/manLogo.png"
              alt="image"
            />
          </div>
        </div>
      </div>
      {/* Job Category list */}
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div>
          <h2 className="font-extrabold text-4xl md:text-5xl text-center mt-32">
            Job Category List
          </h2>
          <p className="text-center mb-8 mt-4 text-gray-500">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {jobCList &&
              jobCList.map((jobCategory) => (
                <JobCategoryCard
                  key={jobCategory.id}
                  jobCategory={jobCategory}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="px-4 py-5 mx-auto mt-20 md:mt-60 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div>
          <h2 className="font-extrabold text-4xl md:text-5xl text-center mt-25">
            Featured Jobs
          </h2>
          <p className="text-center mb-8 mt-4 text-gray-500">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {jobList && !btnClick
            ? jobList.map((job, i) => {
                if (i <= 3) return <AllJobCard key={job.id} job={job} />;
              })
            : jobList &&
              jobList.map((job) => <AllJobCard key={job.id} job={job} />)}
        </div>
        <div className="text-center">
          {!btnClick ? (
            <button
              onClick={() => setBtnClick(true)}
              className="bg-indigo-500 w-[190px] h-[65px] font-bold rounded text-white mt-7"
            >
              See All Jobs
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
