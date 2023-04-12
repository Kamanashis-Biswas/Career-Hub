import React from "react";
import { useNavigate } from "react-router-dom";

const AppliedJobCard = ({ job }) => {
  const {
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    fulltimeOrParttime,
    location,
    salary,
  } = job;

  const navigate = useNavigate();

  return (
    <div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="md:flex p-7 border rounded-lg items-center">
          <div className="w-[290px] h-[240px] flex items-center justify-center rounded-lg bg-gray-200">
            <img
              className="w-[116px] h-[40px]"
              src={companyLogo}
              alt="companyLogo"
            />
          </div>
          <div className="md:flex justify-between w-full items-center">
            <div>
              <h2 className="text-2xl font-extrabold mt-8 md:ml-10">
                {jobTitle}
              </h2>
              <p className="text-gray-500 font-semibold text-xl md:ml-10 mt-2">
                {companyName}
              </p>
              <div className="flex">
                <p className="border text-blue-500 text-center md:ml-10 rounded py-2 w-[109px] mt-4 font-extrabold border-blue-500">
                  {remoteOrOnsite}
                </p>
                <p className="border text-blue-500 text-center rounded py-2 ml-4 w-[109px] mt-4 font-extrabold border-blue-500">
                  {fulltimeOrParttime}
                </p>
              </div>
              <div className="md:flex">
                <div className="md:ml-10 mt-4 flex">
                  <img
                    className="mr-2"
                    src="https://i.ibb.co/GFWxskj/location-2.png"
                    alt=""
                  />
                  <span className="text-gray-500 font-semibold text-xl">
                    {location}
                  </span>{" "}
                </div>
                <div className="md:ml-10 mt-4 flex">
                  <img
                    className="mr-2"
                    src="https://i.ibb.co/M1WhDjy/doller.png"
                    alt=""
                  />
                  <span className="text-gray-500 font-semibold text-xl">
                    Salary : {salary}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => navigate(`/details/${job.id}`)}
                className="w-[157px] h-[50px] md:ml-10 mt-6 text-white font-semibold bg-blue-500 mb-10 rounded"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobCard;
