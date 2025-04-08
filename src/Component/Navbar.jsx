import React, { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Assets } from "../assets/assets";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Global"
        className="bg-white sticky top-0 z-40 flex  max-sm:backdrop-blur-sm max-sm:posit  items-center justify-between px-5 sm:px-10 h-20 w-full"
      >
        <div className="flex lg:flex-1">
          <Link to="/">
            <img src={Assets.Logo_1} alt="" className="p-1.5 w-20 h-20" />
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
        <PopoverGroup className="hidden items-center lg:flex lg:gap-x-5">
          <Link
            to="/"
            className="text-sm/6 px-2 font-semibold text-gray-900 hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            to="/Services"
            className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400 "
          >
            Services
          </Link>
          <Link
            to="/listing"
            className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400"
          >
            Listings
          </Link>
          <Link
            to="/about"
            className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400"
          >
            Contact
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto text-center bg-blue px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-center  mt-10">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="m-2.5 rounded-full p-2.5 text-blue bg-white"
            >
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-bold hover:text-gray-900 text-gray-50"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold hover hover:text-gray-900 text-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/listing"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold hover:text-gray-900 text-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Listings
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold hover:text-gray-900 text-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold hover:text-gray-900 text-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};
export default Navbar;
