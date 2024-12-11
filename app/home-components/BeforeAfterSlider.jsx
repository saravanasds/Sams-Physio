"use client";

import React, { useState, useEffect } from "react";

const ImageComparison = ({ beforeImage, afterImage, label }) => {
  const [sliderValue, setSliderValue] = useState(50);

  const moveDivisor = (e) => {
    setSliderValue(e.target.value);
  };

  useEffect(() => {
    moveDivisor({ target: { value: sliderValue } });
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative w-full py-40 overflow-hidden"> {/* Increased height by changing py-20 to py-40 */}
        <figure
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${beforeImage})` }}
        >
          <div
            id="divisor"
            className="absolute h-full bg-cover bg-no-repeat bg-center"
            style={{
              width: `${sliderValue}%`,
              backgroundImage: `url(${afterImage})`,
            }}
          >
            <div className="absolute right-[-2px] top-0 w-[4px] h-[calc(50%-25px)] bg-white shadow-lg z-10"></div>
            <div className="absolute right-[-2px] bottom-0 w-[4px] h-[calc(50%-25px)] bg-white shadow-lg z-10"></div>
          </div>
          <div
            id="handle"
            className="absolute w-[50px] h-[50px] bg-transparent border-4 border-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ left: `${sliderValue}%` }}
          >
            <div className="absolute left-[-17px] top-1/2 border-r-[6px] border-r-white border-transparent transform -translate-y-1/2"></div>
            <div className="absolute right-[-17px] top-1/2 border-l-[6px] border-l-white border-transparent transform -translate-y-1/2"></div>
          </div>
        </figure>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={moveDivisor}
          className="absolute top-1/2 left-[-25px] w-[calc(100%+50px)] z-30 transform -translate-y-1/2 appearance-none bg-transparent focus:outline-none text-primary-dark"
        />
      </div>
    </div>
  );
};

const Transformation = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto p-6 space-y-12 mt-5">
        <div className="text-center">
          <h1 className="text-xl md:text-4xl font-bold text-primary-dark">
            Therapy Treatments
          </h1>
          <p className="text-base md:text-lg text-gray-700 text-shadow-lg mt-4" style={{ textShadow: "4px 4px 6px white" }}>
            Achieve your dream transformation with our cutting-edge treatments for hair and skin!
          </p>
        </div>

        {/* Before and After Section */}
        <section className="bg-green-100 py-12 rounded-lg">
          <h2 className="text-3xl font-bold text-center text-primary-dark">Before & After</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:px-10">
            <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl transition-all border-2 border-primary-dark">
              <ImageComparison
                beforeImage="/assets/carousel1.jpg"  // Replace with your before image URL
                afterImage="/assets/carousel2.jpg" // Replace with your after image URL
              />
            </div>
            <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl transition-all border-2 border-primary-dark">
              <ImageComparison
                beforeImage="/assets/about4.jpg"  // Replace with your before image URL
                afterImage="/assets/about3.jpg" // Replace with your after image URL
              />
            </div>
          </div>
        </section>
        

        {/* Call to Action */}
        
      </div>
    </>
  );
};

export default Transformation;
