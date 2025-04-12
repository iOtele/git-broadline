import React from "react";
import { Assets } from "../assets/assets";

const Header = () => {
  return (
    <>
      <div className="w-full relative">
        <img
          src={Assets.Hero_img}
          className="sm:h-[95vh] h-screen w-full "
          alt=""
        />

        <div className="absolute flex flex-col top-[32%] left-[4%] sm:left-[7%]  md:left-[6%] lg:left-[3%] xl:left-[3%] text-white mx-auto items-center sm:items-center  md:items-start  justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center sm:text-left">
            Premium Aviation Solutions
          </h1>
          <p className="text-lg sm:text-xl font-normal text-center">
            Experience unparalleled luxury and efficiency in private aviation
          </p>

          <div
            className="flex
      gap-5 mt-14 flex-col sm:flex-row md:justify-start   justify-center items-center "
          >
            <button className="bg-blue-800  p-2 px-6 rounded-md sm:text-xl w-[150px] sm:w-[180px] text-white  hover:bg-white hover:text-blue-800 transition duration-300 cursor-pointer">
              View Listings
            </button>
            <button className="bg-white   p-2 px-6 rounded-md sm:text-xl text-blue-800 w-[150px] sm:w-[180px] hover:bg-blue-800 hover:text-white transition duration-300 cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
