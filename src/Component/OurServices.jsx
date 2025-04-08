import React from "react";
import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";

const OurServices = () => {
  const { Services } = useContext(StoreContext);
  return (
    <div className="flex flex-col items-center py-10 mt-5 shadow-black ">
      <h1 className="text-3xl font-semibold">Our Services</h1>

      <div className="flex justify-center items-center  gap-6 max-sm:flex-col px-7 sm:px-11 w-full shadow-amber-800 pt-6">
        {Services.map((service, index) => (
          <div
            key={index}
            className="lex text-left shadow-lg rounded-lg p-4 w-full md:w-md flex-col gap-4"
          >
            <div>{service.icon}</div>

            <div className="bg-white rounded-lg text-gray-700">
              <h2 className=" text-lg sm:text-xl   font-semibold mb-5">
                {service.title}
              </h2>
              <span className="text-sm sm:text-lg text-gray-700">
                {service.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
