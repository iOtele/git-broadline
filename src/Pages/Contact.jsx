import React from "react";
import ContactForm from "../Component/ContactForm";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <>
      <div className="w-full relative">
        <img
          src={assets.Hero_img_4}
          className="sm:h-[50vh] h-screen w-full opacity-50"
          alt=""
        />{" "}
        <div className=" absolute flex flex-col top-[40%] left-[4%] sm:left-[7%]  md:left-[6%] lg:left-[3%] xl:left-[3%] sm:w[500px] text-black mx-auto items-center  md:items-center  justify-center  ">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            About Us
          </h2>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6">
        <ContactForm />
        {/* Contact Info Panel */}
        <div className="mt-10 border-t pt-6">
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">
            Contact Info
          </h3>
          <p className="text-gray-700 mb-1">Phone: +1 786-860-7518</p>
          <p className="text-gray-700 mb-1">
            Email: Broadlineaviationcorp@gmail.com
          </p>
          <p className="text-gray-700">
            Follow us on Instagram:{" "}
            <a
              href="https://instagram.com/broadline_aviation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline"
            >
              @broadline_aviation
            </a>
          </p>
        </div>
        <div className="mt-10 p-6 bg-blue-900 text-white text-center rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">
            A personalized aircraft journey starts here.
          </h3>
          <p>Let’s elevate your private aviation experience together.</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
