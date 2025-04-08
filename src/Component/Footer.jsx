import React from "react";
import { Assets } from "../assets/assets";
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
            <img src={Assets.Logo_1} alt="" className=" p-1 w-20 h-20 " />
          </Link>
          <p>Leading the way in private aviation excellence since 2025</p>
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-3 ">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <Link to="/services">
              <li>Services</li>
            </Link>
            <Link to="/listings">
              <li>Aircraft Listings</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="flex flex-col gap-2">
            <l1 className="flex gap-2 items-center">
              <FaPhone /> <p>+1 (555) 123-4567</p>
            </l1>
            <l1 className="flex gap-2 items-center">
              <FaEnvelope /> <p>info@broadline.com</p>
            </l1>
          </ul>
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <ul className="flex gap-2">
            <Link>
              <li>
                <FaLinkedin />
              </li>
            </Link>{" "}
            <Link>
              <li>
                <FaTwitter />
              </li>
            </Link>{" "}
            <Link>
              <li>
                <FaInstagram />
              </li>
            </Link>{" "}
          </ul>
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
