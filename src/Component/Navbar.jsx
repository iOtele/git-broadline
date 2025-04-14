import React, { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Global"
        className="bg-white sticky top-0 z-40 flex  max-sm:backdrop-blur-sm max-sm:posit items-center justify-between px-5 sm:px-10 h-20 w-full"
      >
        <div className="flex lg:flex-1">
          <Link to="/">
            <img src={assets.Logo_1} alt="" className="p-1.5 w-20 h-20" />
          </Link>
        </div>
        <div className="flex justify-between gap-6">
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-3 text-gray-700"
            >
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>
        <PopoverGroup className="hidden items-center lg:flex lg:gap-x-5 uppercase">
          <div className="group relative cursor-pointer py-2 ">
            <Link
              to="/"
              className="text-sm/6 px-2 font-medium text-gray-900 hover:text-gray-400 "
            >
              HOME
            </Link>
            <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-600 ease-in-out bg-gray-100 shadow-lg rounded z-50">
              <div className="flex flex-col py-2 px-4 text-gray-800 ">
                <Link
                  to="/home/career"
                  className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray transition-colors duration-200"
                >
                  Career
                </Link>
                <Link
                  to="/home/client-portal"
                  className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                >
                  Client Portal
                </Link>
                <Link
                  to="/home/privacy-policy"
                  className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="group relative cursor-pointer py-2">
            <Link
              to="/catalog"
              className="text-sm/6 px-2 font-medium text-gray-900 hover:text-gray-400"
            >
              AirCraft Catalog
            </Link>

            <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-600 ease-in-out bg-gray-100 shadow-lg rounded z-50">
              <div className="flex flex-col py-2 px-4 text-gray-800">
                <Link
                  to="/purchase/helicopters"
                  className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                >
                  Helicopters
                </Link>
                <Link
                  to="/purchase/light-jets"
                  className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                >
                  Light Jets
                </Link>
                <Link
                  to="/purchase/midsize-jets"
                  className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                >
                  Midsize Jets
                </Link>
                <Link
                  to="/purchase/heavy-jets"
                  className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                >
                  Heavy Jets
                </Link>
              </div>
            </div>
          </div>
          <div className="group relative cursor-pointer py-2">
            <Link
              to="/services"
              className="text-sm/6 px-2 font-medium text-gray-900 hover:text-gray-400"
            >
              Services
            </Link>

            <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-600 ease-in-out bg-gray-100 shadow-lg rounded z-50">
              <div className="flex flex-col py-2 px-4 text-gray-800">
                <Link
                  to="/services/fleet-acquisition"
                  className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                >
                  Fleet Acquisition
                </Link>
                <Link
                  to="/services/custom-interior"
                  className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                >
                  Custom Interior Advisory
                </Link>
              </div>
            </div>
          </div>
          <div className="group relative cursor-pointer py-2">
            <Link
              to="/about-us"
              className="text-sm/6 px-2 font-medium text-gray-900 hover:text-gray-400"
            >
              About Us
            </Link>

            <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-600 ease-in-out bg-gray-100 shadow-lg rounded z-50">
              <div className="flex flex-col py-2 px-4 text-gray-800">
                <Link
                  to="/about-us/our-story"
                  className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                >
                  Our Story
                </Link>
                <Link
                  to="/about-us/team"
                  className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                >
                  Meet the Team
                </Link>
                <Link
                  to="/about-us/our-standards"
                  className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                >
                  Our Standards
                </Link>
              </div>
            </div>
          </div>
          <div className="group relative cursor-pointer py-2">
            <Link
              to="/testimonials"
              className="text-sm/6 px-2 font-medium text-gray-900 hover:text-gray-400"
            >
              Testimonials
            </Link>

            <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-600 ease-in-out bg-gray-100 shadow-lg rounded z-50">
              <div className="flex flex-col py-2 px-4 text-gray-800">
                <Link
                  to="/testimonials/client-story"
                  className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                >
                  Client Story
                </Link>
                <Link
                  to="/testimonials/case-study"
                  className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                >
                  Case Studies
                </Link>
              </div>
            </div>
          </div>
          <div className="group relative cursor-pointer py-2">
            <Link
              to="/faqs"
              className="text-sm/6 px-2 font-medium text-gray-900 hover:text-gray-400"
            >
              FAQs
            </Link>

            <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-600 ease-in-out bg-gray-100 shadow-lg rounded z-50">
              <div className="flex flex-col py-2 px-4 text-gray-800">
                <Link
                  to="/faqs/faq"
                  className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>
          <Link
            to="/contact"
            className="text-sm/6 px-2 font-medium text-gray-900  hover:text-gray-400"
          >
            Contact
          </Link>

          <Link
            to="/blog"
            className="text-sm/6 px-2 font-medium text-gray-900  hover:text-gray-400"
          >
            Blog
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blue px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
          <div className="flex items-center justify-center  mt-12">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="m-2.5 rounded-full p-2.5 text-blue bg-white"
            >
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root text-white">
            <div className="-my-6 divide-y divide-gray-500/10 uppercase ">
              <div className="group relative cursor-pointer py-2 ">
                <Link
                  to="/"
                  className="text-sm/6 px-2 font-medium hover:text-gray-400 transition-all duration-300 ease-in-out"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HOME
                </Link>
                <div className="absolute right-0 top-0 mt-2 w-40 hidden group-hover:block transition-all duration-300 ease-in-out bg-gray-100 shadow-lg rounded z-50">
                  <div className="flex flex-col py-2 px-4 text-gray-800">
                    <Link
                      to="/home/career"
                      className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray   transition-colors duration-200"
                    >
                      Career
                    </Link>
                    <Link
                      to="/home/client-portal"
                      className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                    >
                      Client Portal
                    </Link>
                    <Link
                      to="/home/privacy-policy"
                      className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group relative cursor-pointer py-2">
                <Link
                  to="/catalog"
                  className="text-sm/6 px-2 font-medium hover:text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  AirCraft Catalog
                </Link>

                <div className="absolute  right-0 top-0  mt-2 w-40 hidden group-hover:block transition-all duration-300 bg-gray-100 shadow-lg rounded z-50">
                  <div className="flex flex-col py-2 px-4 text-gray-800">
                    <Link
                      to="/purchase/helicopters"
                      className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                    >
                      Helicopters
                    </Link>
                    <Link
                      to="/purchase/light-jets"
                      className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                    >
                      Light Jets
                    </Link>
                    <Link
                      to="/purchase/midsize-jets"
                      className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                    >
                      Midsize Jets
                    </Link>
                    <Link
                      to="/purchase/heavy-jets"
                      className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                    >
                      Heavy Jets
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group relative cursor-pointer py-2">
                <Link
                  to="/services"
                  className="text-sm/6 px-2 font-medium hover:text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>

                <div className="absolute  right-0 top-0  mt-2 w-48 hidden group-hover:block transition-all duration-300 ease-in-out bg-gray-100 shadow-lg rounded z-50">
                  <div className="flex flex-col py-2 px-4 text-gray-800">
                    <Link
                      to="/services/fleet-acquisition"
                      className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                    >
                      Fleet Acquisition
                    </Link>
                    <Link
                      to="/services/custom-interior"
                      className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                    >
                      Custom Interior Advisory
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group relative cursor-pointer py-2">
                <Link
                  to="/about-us"
                  className="text-sm/6 px-2 font-medium hover:text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>

                <div className="absolute right-0 top-0  mt-2 w-44 hidden group-hover:block transition-all duration-300 bg-gray-100 ease-in-out shadow-lg rounded z-50">
                  <div className="flex flex-col py-2 px-4 text-gray-800">
                    <Link
                      to="/about-us/our-story"
                      className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                    >
                      Our Story
                    </Link>
                    <Link
                      to="/about-us/team"
                      className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                    >
                      Meet the Team
                    </Link>
                    <Link
                      to="/about-us/our-standards"
                      className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                    >
                      Our Standards
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group relative cursor-pointer py-2">
                <Link
                  to="/testimonials"
                  className="text-sm/6 px-2 font-medium hover:text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>

                <div className="absolute  right-0 top-0  mt-2 w-40 hidden group-hover:block transition-all duration-300 bg-gray-100 shadow-lg rounded z-50">
                  <div className="flex flex-col py-2 px-4 text-gray-800">
                    <Link
                      to="/testimonials/client-story"
                      className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                    >
                      Client Story
                    </Link>
                    <Link
                      to="/testimonials/case-study"
                      className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                    >
                      Case Studies
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group relative cursor-pointer py-2">
                <Link
                  to="/faqs"
                  className="text-sm/6 px-2 font-medium hover:text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQs
                </Link>

                <div className="absolute  right-0 top-0  mt-2 w-40 opacity-0 group-hover:opacity-0 transition-opacity duration-300 bg-gray-100 shadow-lg rounded z-50">
                  <div className="flex flex-col py-2 px-4 text-gray-800">
                    <Link
                      to="/faqs/faq"
                      className="block py-1 border-b border-gray-200 text-gray-600 font-medium hover:text-gray"
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                to="/contact"
                className="text-sm/6 px-2 font-medium  hover:text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                to="/blog"
                className="text-sm/6 px-2 font-medium  hover:text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};
export default Navbar;
