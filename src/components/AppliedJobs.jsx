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
          console.log(jobs);
        });
    }
  }, []);

  return (
    <>
      <select
        onChange={(e) => {
          setJob([...jobs.filter((d) => d.remoteOrOnsite === e.target.value)]);
        }}
      >
        <option value="Remote">Remote</option>
        <option value="Onsite">Onside</option>
      </select>
      <div>{job && job.map((e) => <AppliedJobCard key={e.id} job={e} />)}</div>
    </>
  );
};

export default AppliedJobs;
