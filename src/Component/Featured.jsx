import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { FaArrowRightLong } from "react-icons/fa6";

const Team = () => {
  const { Featured } = useContext(StoreContext);
  return (
    <div className=" flex flex-col items-center py-10 mt-5 shadow-black">
      <h1 className="text-3xl font-semibold w-full text-center ">
        Featured Aircraft
      </h1>

      <div className="flex justify-center items-center  gap-6 max-sm:flex-col px-7 sm:px-11 w-full shadow-amber-800 pt-6">
        {Featured.map((feature, index) => (
          <div
            key={index}
            className="flex text-left shadow-lg rounded-lg p-4 w-full md:w-md flex-col gap-4 "
          >
            <img
              className="rounded-lg mb-3 object-cover h-[200px] w-full"
              src={feature.image}
              alt={feature.description}
            />
            <div className="bg-white px-4 pt-4 rounded-lg ">
              <h2 className=" max-sm:text-2xl font-semibold">
                {feature.title}
              </h2>
              <p className="text-sm sm:text-lg text-gray-700">
                {feature.description}
              </p>
            </div>
            <span className="flex items-center px-4 gap-2 text-blue font-semibold cursor-pointer">
              Learn More <FaArrowRightLong />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
