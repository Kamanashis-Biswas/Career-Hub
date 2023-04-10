import React from "react";

const JobCategoryCard = (jobCategory) => {
  const { logo, name, jobsAvailable } = jobCategory.jobCategory;
  return (
    <div className="bg-cyan-100 rounded-xl">
      <div>
        <img className="mb-9 mt-16 ml-[40px]" src={logo} alt="" />
        <p className="ml-[40px] font-extrabold mb-2 text-xl">{name}</p>
        <p className="ml-[40px] mb-10 text-gray-500">
          {jobsAvailable} Jobs Available
        </p>
      </div>
    </div>
  );
};

export default JobCategoryCard;
