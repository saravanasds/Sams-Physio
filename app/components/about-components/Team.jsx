"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const AboutTeamSection = () => {
  const team = [
    {
      name: "Dr.Srujun Vadranapu",
      role: "Ms Ortho, FSHM FOR, FASM, FSS (France)",
      image: "/images/taylor.jpg",
      bio: "[ Orthopedic Physiotherapist ]",
    },
    {
      name: "Dr.Vignesh",
      role: "MD, DM",
      image: "/images/alex.jpg",
      bio: "[ Specialist Neurologist Doctor ]",
    },
    {
      name: "Dr. Sam Clement",
      role: "MPT (Paediatric)",
      image: "/images/jordan.jpg",
      bio: "[ Certified, Electro dry needling therapy,cupping therapy,Chiropractor,IASTM practioner(Specialized in Pain management) ]",
    },  
    {
      name: "Dr.Sam Clinton",
      role: "BPT",
      image: "/images/jordan.jpg",
      bio: "[ Certified, Electro dry needling therapy,cupping therapy,IASTM practioner(Specialized in Pain management) ]",
    },   {
      name: "Dr.Vijayaram",
      role: "BPT",
      image: "/images/jordan.jpg",
      bio: "[ Certified,Myo fascial trigger release,Chiropractor(Specialized in Exercise therapy) ]",
    }, 
    {
      name: "Dr.Dhivya dharshini",
      role: "BPT (Female consultant physiotherapist)",
      image: "/images/jordan.jpg",
      bio: "[ Certified in Yoga science,Myo fascial release,Cupping therapy(Specialized in Paediatrics) ]",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === team.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? team.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 700); // Match transition duration

    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="lg:py-20 bg-primary-dark relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-5 tracking-wide"style={{textShadow:"2px 2px 4px rgba(0,0,0,0.7)"}}>
          Meet Our Consultants
        </h2>
        <p className="lg:text-lg text-sm text-white mb-8 tracking-wide"style={{textShadow:"2px 2px 4px rgba(0,0,0,0.7)"}}>
          Our experienced team is here to provide expert care and guidance.
        </p>

        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {team.map((member, index) => (
              <div
                key={index}
                className="min-w-full flex-shrink-0 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-40 w-40 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={`${member.name} photo`}
                    width={160}
                    height={160}
                    className="rounded-2xl object-cover border-[1px] border-primary-dark"
                  />
                </div>
                <h3 className="lg:text-xl text-lg font-semibold text-primary-dark">
                  {member.name}
                </h3>
                <p className="text-lg text-gray-600 py-1">{member.role}</p>
                <p className="lg:text-lg text-sm text-gray-700 mt-4">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-primary-dark text-lg p-3 rounded-full hover:bg-primary-light shadow-lg flex items-center justify-center"
        style={{ top: "60%", transform: "translateY(-60%)" }} // Ensures perfect centering
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-primary-dark text-lg  p-3 rounded-full hover:bg-primary-light shadow-lg flex items-center justify-center"
        style={{ top: "60%", transform: "translateY(-60%)" }} // Ensures perfect centering
      >
        <IoIosArrowForward />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {team.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full border-2 ${
              currentSlide === index
                ? "bg-primary-light border-primary-light"
                : "bg-primary-light hover:border-primary-dark hover:bg-primary-light"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default AboutTeamSection;
