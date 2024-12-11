"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav bg-white z-10 top-0 border-b-[1px] border-gray-700">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between sm:py-3 py-2">
          {/* Logo Section */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-center flex-shrink-0 text-primary-light  gap-2">
              <img
                src="/assets/logo.jpeg" // Path from the public folder
                alt="Logo"
                className="h-8 sm:h-12 lg:h-16 w-auto" // Responsive height for different devices
              />
              <h2 className="font-bold lg:text-xl text-lg tracking-wide uppercase text-primary-dark">Sam's physio & Re hab Clinic</h2>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:block font-semibold text-primary-dark">
              <div className="ml-10 flex items-baseline space-x-8 text-lg">
                <Link href="/" className="nav-link">
                  Home
                </Link>
                <Link href="/about" className="nav-link">
                  About
                </Link>
                <Link href="/services" className="nav-link">
                  Services
                </Link>
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </div>
              
            </div>
            <button className="bg-primary-dark text-white text-base font-medium rounded-3xl lg:px-6 py-2 tracking-wide hover:bg-transparent hover:text-primary-dark border-2 border-primary-dark">Book Appointment</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#3E4095] hover:text-[#3E4095] hover:bg-white focus:outline-none"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-200 flex justify-center items-center">
          <div className="px-2 py-2 pb-4 space-x-8 sm:px-3 text-[14px] sm:text-[16px] font-semibold">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/services" className="nav-link">
              Services
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
