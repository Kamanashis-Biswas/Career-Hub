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
      fetch("../../public/job_list.json")
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
      <div className="flex gap-4 mt-32">
        <div className="w-3/5">
          <p className="text-gray-500 text-base mb-6">
            <span className="text-black font-extrabold">Job Description: </span>{" "}
            {job.jobDescription}
          </p>
          <p className="text-gray-500 text-base mb-6">
            <span className="text-black font-extrabold">
              Job Responsibility:
            </span>
            {job.jobResponsibility}
          </p>
          <h2>Educational Requirements:</h2>
          <p>{job.educationalRequirements}</p>
          <h2>Experiences: </h2>
          <p>{job.experiences}</p>
        </div>

        <div className="w-2/5">
          <div>
            <h2>Job Details</h2>
            <hr />
            <p>
              <span>Salary: </span>
              {job.salary} (Per Month)
            </p>
            <p>
              <span>Job Title: </span>
              {job.jobTitle}
            </p>
            <h2>Contact Information</h2>
            <p>
              <span>Phone: </span>
              {job.contactInformation.phone}
            </p>
            <p>
              <span>Address: </span>
              {job.location}
            </p>
          </div>
          <button onClick={jobManagement}>Apply Now</button>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default JobDetails;
