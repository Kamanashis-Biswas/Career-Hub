import React, { useEffect, useState } from "react";
import AllJobCard from "./Card/AllJobCard";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const allJobs = JSON.parse(localStorage.getItem("applied-jobs"));
    if (allJobs) {
      fetch("../../public/job_list.json")
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          setJobs(allJobs.map((e) => data.find((d) => d.id == e)));
        });
    }
  }, []);

  return (
    <div>
      <h2>AppliedJobs</h2>
      {jobs && jobs.map((e) => <AllJobCard key={e.id} job={e} />)}
    </div>
  );
};

export default AppliedJobs;
