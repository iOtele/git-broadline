import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="w-full relative">
        <img
          src={assets.Hero_img_1}
          className="sm:h-[50vh] h-screen w-full opacity-50"
          alt=""
        />{" "}
        <div className=" absolute flex flex-col top-[40%] left-[4%] sm:left-[7%]  md:left-[6%] lg:left-[3%] xl:left-[3%] sm:w[500px] text-black mx-auto items-center  md:items-center  justify-center  ">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            About Us
          </h2>
          <p className="text-lg md:text-2xl text-white text-center font-semibold">
            The Broadline standard
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center  gap-6 flex-col px-7 sm:px-11 w-full pt-6 pb-6">
        <div className="flex flex-col md:flex-row gap-6 max-sm:gap-4 w-full max-sm:items-center md:justify-center md:items-center">
          <h1 className="flex-1 pr-10 ">
            <span className="text-blue text-2xl">A </span>Broadline Aviation was
            founded with one vision to redefine the experience of aircraft
            acquisition with an uncompromising standard of luxury, precision,
            and professionalism. Specializing in private jets and helicopters,
            we provide a seamless, concierge-style approach to aviation
            brokerage and inspections — empowering our clients to invest in the
            skies with confidence. Backed by a team of licensed aviation
            professionals and seasoned market experts, Broadline offers more
            than just listings — we deliver a curated, detail- rich catalog of
            premium aircraft, each accompanied by expert evaluations and
            immersive 360-degree visuals. Our mission is to simplify and elevate
            every step of the aircraft purchasing journey, from initial interest
            to final acquisition. Whether you’re a corporate executive, aviation
            enthusiast, or first-time buyer, Broadline Aviation is your trusted
            partner for tailored solutions, trusted insights, and discreet,
            world-class service.
          </h1>
          <img
            src={assets.aircraft_4}
            alt=""
            className="w-full h-40 sm:flex-1 rounded-md shadow-lg object-cover"
          />
        </div>
        <div className="flex flex-col items-center w-full gap-6">
          <h2 className="w-full flex flex-col  md:flex-row mt-5 md:justify-center md:items-center    text-3xl font-semibold  text-center ">
            Core Values
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full md:justify-around md:items-center  border-blue-900 rounded-md p-5  shadow-sm shadow-blue-200 ">
            <h4 className="flex text-2xl justify-center  md:text-3xl lg:text-4xl border border-gray-200 rounded-full hover:bg-blue hover:text-white p-3 px-5 md:px-5 box-shadow-lg shadow-sm transition-color duration-400 ease-in-out">
              Precision
            </h4>
            <h4 className="flex text-2xl justify-center  md:text-3xl lg:text-4xl border border-gray-200 rounded-full hover:bg-blue hover:text-white p-3 px-5 md:px-5 box-shadow-lg shadow-sm transition-color duration-400 ease-in-out">
              Discretion
            </h4>
            <h4 className="flex text-2xl justify-center  md:text-3xl lg:text-4xl border border-gray-200 rounded-full hover:bg-blue hover:text-white p-3 px-5 md:px-5 box-shadow-lg shadow-sm transition-color duration-400 ease-in-out">
              Exellence
            </h4>
            <h4 className="flex text-2xl justify-center  md:text-3xl lg:text-4xl border border-gray-200 rounded-full hover:bg-blue hover:text-white p-3 px-5 md:px-5 box-shadow-lg shadow-sm transition-color duration-400 ease-in-out">
              Trust
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
``;

export default About;
