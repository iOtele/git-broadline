import React from "react";
import { assets } from "../assets/assets";
import {
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="bg-blue-950 flex max-sm:flex-col  justify-between gap-6 decoration-0 text-gray-400 p-6 sm:px-11">
        <div className="flex flex-col">
          <Link to="/">
            <img src={assets.Logo_1} alt="" className=" p-1 w-20 h-20 " />
          </Link>
          <p>Leading the way in private aviation excellence since 2025</p>
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-3 ">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <Link to="/services">Services</Link>
            <Link to="/listings">Aircraft Listings</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <div className="flex flex-col gap-2">
            <Link className="flex gap-2 items-center">
              <FaPhone /> <p>+1 (555) 123-4567</p>
            </Link>
            <Link className="flex gap-2 items-center">
              <FaEnvelope /> <p>info@broadline.com</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-2">
            <Link
              to="https://www.linkedin.com/broadline_aviation"
              target="_blank"
            >
              <FaLinkedin />
            </Link>{" "}
            <Link to="https://www.x.com/broadline_aviation" target="_blank">
              <FaTwitter />
            </Link>{" "}
            <Link
              to="https://www.instagram.com/broadline_aviation"
              target="_blank"
            >
              <FaInstagram />
            </Link>{" "}
          </div>
        </div>
      </div>{" "}
      <div>
        <p className="text-center bg-blue-950 text-gray-400">
          © 2025 Broadline. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
