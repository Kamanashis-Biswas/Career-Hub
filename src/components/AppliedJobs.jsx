import React, { useEffect, useState } from "react";
import AppliedJobCard from "./Card/AppliedJobCard";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const allJobs = JSON.parse(localStorage.getItem("applied-jobs"));
    if (allJobs) {
      fetch("../../public/job_list.json")
        .then((data) => data.json())
        .then((data) => {
          setJobs(allJobs.map((e) => data.find((d) => d.id == e)));
        });
    }
  }, []);

  return (
    <div>{jobs && jobs.map((e) => <AppliedJobCard key={e.id} job={e} />)}</div>
  );
};

export default AppliedJobs;
