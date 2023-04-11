import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { json } from "react-router-dom";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { jid } = useParams();
  const [job, setJob] = useState(null);
  useEffect(() => {
    if (jid) {
      fetch("/job_list.json")
        .then((data) => data.json())
        .then((data) => {
          setJob(data.find((e) => e.id === jid));
        });
    }
  }, []);

  const jobManagement = () => {
    const storedArray = JSON.parse(localStorage.getItem("applied-jobs")) || [];
    if (storedArray) {
      const j = storedArray.find((e) => e === job.id);
      if (!j) {
        storedArray.push(job.id);
        localStorage.setItem("applied-jobs", JSON.stringify(storedArray));
        alert("Applied to the job!");
      } else {
        alert("Job already added!");
      }
    }
  };

  return job ? (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="md:flex gap-4 md:mt-32">
        <div className="w-3/5">
          <p className="text-gray-500 text-base mb-6">
            <span className="text-black font-extrabold">Job Description: </span>{" "}
            {job.jobDescription}
          </p>
          <p className="text-gray-500 text-base mb-6">
            <span className="text-black font-extrabold">
              Job Responsibility:
            </span>{" "}
            {job.jobResponsibility}
          </p>
          <h2 className="text-black mb-4 font-extrabold">
            Educational Requirements:
          </h2>
          <p className="text-gray-500 text-base mb-6">
            {job.educationalRequirements}
          </p>
          <h2 className="text-black mb-4 font-extrabold">Experiences: </h2>
          <p className="text-gray-500 text-base mb-6">{job.experiences}</p>
        </div>

        <div className="md:w-2/5">
          <div className="bg-cyan-100 p-7 rounded">
            <h2 className="font-extrabold text-xl mb-6">Job Details</h2>
            <hr className="mb-6" />
            <p className="text-gray-500 text-base">
              <span className="font-bold text-sm text-black">Salary: </span>
              {job.salary} (Per Month)
            </p>
            <p className="text-gray-500 text-base ">
              <span className="font-bold text-sm text-black">Job Title: </span>
              {job.jobTitle}
            </p>
            <h2 className="font-extrabold mt-8 text-xl mb-6">
              Contact Information
            </h2>
            <hr className="mb-6" />
            <p className="text-gray-500 text-base">
              <span className="font-bold text-sm text-black">Phone: </span>
              {job.contactInformation.phone}
            </p>
            <p className="text-gray-500 text-base">
              <span className="font-bold text-sm text-black">Email: </span>
              {job.contactInformation.email}
            </p>
            <p className="text-gray-500 text-base">
              <span className="font-bold text-sm text-black">Address: </span>
              {job.location}
            </p>
          </div>
          <div className="text-center">
            <button
              className="h-[65px] w-full mt-6 rounded text-white font-semibold bg-blue-500 "
              onClick={jobManagement}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default JobDetails;
