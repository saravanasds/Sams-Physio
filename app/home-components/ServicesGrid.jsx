"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      image: "/assets/carousel1.jpg",
      title: "Physiotherapy",
      description: "Comprehensive care to improve mobility and strength.",
    },
    {
      id: 2,
      image: "/assets/carousel2.jpg",
      title: "Rehabilitation",
      description: "Post-injury or surgery recovery for optimal health.",
    },
    {
      id: 3,
      image: "/assets/carousel1.jpg",
      title: "Sports Therapy",
      description: "Specialized therapy for athletes to enhance performance.",
    },
    {
      id: 4,
      image: "/assets/carousel2.jpg",
      title: "Wellness Programs",
      description: "Programs designed for overall health and wellbeing.",
    },
    {
      id: 5,
      image: "/assets/carousel1.jpg",
      title: "Pain Management",
      description: "Targeted therapy to relieve chronic and acute pain.",
    },
    {
      id: 6,
      image: "/assets/carousel2.jpg",
      title: "Cardiac Rehab",
      description: "Rehabilitation for heart patients to regain health.",
    },
    {
      id: 7,
      image: "/assets/carousel1.jpg",
      title: "Post-Surgery Recovery",
      description: "Care and therapy for smooth recovery after surgery.",
    },
    {
      id: 8,
      image: "/assets/carousel2.jpg",
      title: "Pediatric Physiotherapy",
      description: "Specialized therapy for children’s growth and mobility.",
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <div className="lg:py-12 py-6 bg-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="lg:text-3xl text-2xl font-bold text-center mb-4 text-primary-dark">
          Expert Physiotherapy Services Tailored for You
        </h2>
        <p className="lg:text-lg text-base font-base text-center mb-8 text-gray-600">
          At Sam's Physio & Rehab, we provide personalized physiotherapy
          services to help you recover, manage pain, and improve mobility. Our
          expert team uses advanced techniques to tailor treatments that enhance
          your quality of life.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover transform transition-transform duration-300 hover:scale-105 hover:opacity-90"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-primary-dark mb-2">
                  {service.title}
                </h3>
                <p
                  className={`text-gray-600 transition-all ${
                    expanded === service.id ? "max-h-40" : "max-h-12 truncate"
                  }`}
                >
                  {service.description}
                </p>

                {/* Show More */}
                <button
                  onClick={() => toggleExpand(service.id)}
                  className="flex items-center mt-3 text-primary-dark hover:text-primary-dark font-semibold"
                >
                  {expanded === service.id ? "Show Less" : "Show More"}
                  <FaArrowRight
                    className={`ml-2 transform ${
                      expanded === service.id ? "rotate-90" : ""
                    } transition-transform duration-300`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
