import React from "react";
import { Assets } from "../assets/Assets";
// import { StoreContext } from "../Context/StoreContext";
// import OurServices from "../Component/OurServices";

const Services = () => {
  // const { Services } = useContext(StoreContext);

  return (
    <>
      <div className="w-full relative">
        <img
          src={Assets.Hero_img_2}
          className="sm:h-[50vh] h-screen w-full opacity-50"
          alt=""
        />

        <div className=" absolute flex flex-col top-[40%] left-[4%] sm:left-[7%]  md:left-[6%] lg:left-[3%] xl:left-[3%] sm:w[500px] text-black mx-auto items-center  md:items-center  justify-center  ">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Services
          </h2>
        </div>
      </div>
      <div className="flex flex-col w-full px-7 md:px-11 ">
        <div className="flex justify-between items-center"></div>
      </div>
    </>
  );
};

export default Services;
