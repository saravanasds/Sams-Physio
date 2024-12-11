"use client";

import React, { useState, useEffect } from "react";
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: "/assets/carousel1.jpg",
      title: "Physiotherapy Center",
      description: "We provide the best physiotherapy services for you.",
    },
    {
      id: 2,
      image: "/assets/carousel2.jpg",
      title: "Comprehensive Care",
      description: "Our team is dedicated to your health and recovery.",
    },
    {
      id: 3,
      image: "/assets/carousel1.jpg",
      title: "State-of-the-Art Facilities",
      description: "Experience the latest advancements in physiotherapy.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
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
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-[500px] flex items-center justify-center relative"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40"></div>
            <div className="absolute text-center text-primary-dark px-4"style={{textShadow:"2px 2px 4px rgba(255,255,255)"}}>
              <h2 className="lg:text-5xl text-3xl font-extrabold mb-3 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="lg:text-xl text-lg drop-shadow-md">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 shadow-lg"
      >
      <IoIosArrowBack/>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 shadow-lg"
      >
       < IoIosArrowForward/>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full border-2 ${
              currentSlide === index
                ? "bg-primary-light border-primary-light"
                : "bg-transparent border-primary-dark hover:bg-primary-light"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
