"use client";

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaHome, FaInfoCircle, FaConciergeBell, FaPhone, FaEnvelope } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi"; // Fixed extra comma
import { FaHandHoldingMedical } from "react-icons/fa";
import { RiPsychotherapyFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat object-cover lg:h-[450px] lg:pt-10 pt-5"
      style={{ backgroundImage: "url('/assets/footer1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-26 border-gray-700 border-[1px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Sam's Physio & Re Hab</h3>
            <p className="text-base text-gray-300">
              We are committed to providing exceptional services and support for
              our clients. Discover more about our mission and vision.
            </p>
            <p>
              <h3></h3>
              <h3></h3>
              <h3></h3>
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaHome className="mr-2 text-primary-light" />
                <a
                  href="/"
                  className="text-base text-gray-300 hover:text-primary-light hover:tracking-wider transform transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <FaInfoCircle className="mr-2 text-primary-light" />
                <a
                  href="/about"
                  className="text-base text-gray-300 hover:text-primary-light hover:tracking-wider transform transition-all duration-300"
                >
                  About
                </a>
              </li>
              <li className="flex items-center">
                <FaConciergeBell className="mr-2 text-primary-light" />
                <a
                  href="/services"
                  className="text-base text-gray-300 hover:text-primary-light hover:tracking-wider transform transition-all duration-300"
                >
                  Services
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-primary-light" />
                <a
                  href="/contact"
                  className="text-base text-gray-300 hover:text-primary-light hover:tracking-wider transform transition-all duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white tracking-wide">Services</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <RiPsychotherapyFill className="mr-2 text-primary-light" />
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-primary-light hover:tracking-wider transform transition-all duration-300"
                >
                  Physiotherapy
                </a>
              </li>
              <li className="flex items-center">
                <FaHandHoldingMedical className="mr-2 text-primary-light" />
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-primary-light hover:tracking-wider transform transition-all duration-300"
                >
                  Rehabilitation
                </a>
              </li>
              <li className="flex items-center">
                <GiHealthNormal className="mr-2 text-primary-light" />
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-primary-light hover:tracking-wider transform transition-all duration-300"
                >
                  Wellness Programs
                </a>
              </li>
              <li className="flex items-center">
                <FaConciergeBell className="mr-2 text-primary-light" />
                <a
                  href="#"
                  className="text-base text-gray-300 hover:text-primary-light hover:tracking-wider transform transition-all duration-300"
                >
                  Consultations
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white tracking-wide">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-base text-gray-300">
                <FaHome className="mr-2 text-primary-light" /> 2, Ramesh theatre backside,
              </li>
              <li className="flex items-center text-base text-gray-300">
                <FaHome className="mr-2 text-primary-light" />
                Shanmugapuram, Palani.
              </li>
              <li className="flex items-center text-base text-gray-300">
                <FaEnvelope className="mr-2 text-primary-light" />
                Email: samsphysio1@gmail.com
              </li>
              <li className="flex items-center text-base text-gray-300">
                <FaPhone className="mr-2 text-primary-light" />
                Phone: 7200220631
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 border-t border-gray-700 pt-6 text-center text-base text-gray-400">
          © {new Date().getFullYear()} Sam's Physio & Re Hab Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
