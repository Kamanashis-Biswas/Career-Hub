import React, { useEffect, useState } from "react";
import AppliedJobCard from "./Card/AppliedJobCard";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState([]);

  useEffect(() => {
    const allJobs = JSON.parse(localStorage.getItem("applied-jobs"));
    if (allJobs) {
      fetch("/job_list.json")
        .then((data) => data.json())
        .then((data) => {
          setJobs(allJobs.map((e) => data.find((d) => d.id == e)));
          setJob(allJobs.map((e) => data.find((d) => d.id == e)));
        });
    }
  }, []);

  return (
    <>
      <div className="bg-cyan-100 text-center">
        <h2 className="font-extrabold text-3xl py-16 md:py-32">Applied Jobs</h2>
      </div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="text-right font-semibold text-xl md:mt-32">
          <label className="mr-1" htmlFor="jobs">
            Filter by:
          </label>
          <select
            name="jobs"
            id="jobs"
            onChange={(e) => {
              setJob([
                ...jobs.filter((d) => d.remoteOrOnsite === e.target.value),
              ]);
            }}
          >
            <option value="Remote">Remote</option>
            <option value="Onsite">Onside</option>
          </select>
        </div>
      </div>
      <div>{job && job.map((e) => <AppliedJobCard key={e.id} job={e} />)}</div>
    </>
  );
};

export default AppliedJobs;
