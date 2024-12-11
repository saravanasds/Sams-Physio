import React from "react";

const Aboutdescription = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:gap-10 gap-5 lg:py-10 py-5 bg-gray-50 rounded-lg shadow-md px-5 lg:px-10">
      {/* Image Section */}
      <div className="lg:w-1/3 w-full overflow-hidden rounded-lg shadow-lg p-5 bg-primary-dark ">
        <img
          src="/assets/about4.jpg"
          alt="About Us"
          className="w-full h-full object-cover transform transition-transform duration-300 rounded-lg border-4 border-primary-light"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-2/3 w-full text-justify text-gray-700 lg:leading-relaxed leading-loose">
  <h2 className="text-2xl lg:text-4xl font-bold text-primary-dark mb-4">
     Helping You Move Better, Live Better
  </h2>
  <p className="text-base lg:text-lg mb-6 text-gray-600">
    At Sam's Physio & Rehab, we provide expert physiotherapy and rehabilitation services tailored to your needs. Whether recovering from an injury or managing a condition, our compassionate team uses evidence-based techniques and state-of-the-art facilities to restore mobility, relieve pain, and enhance your quality of life. Let us help you move better and live healthier!
  </p>

  <ul className="space-y-4 mb-6 tracking-wide">
    <li className="flex items-start space-x-2">
      <span className="text-blue-500 font-semibold">✔</span>
      <p>Personalized treatment plans designed to meet your specific needs.</p>
    </li>
    <li className="flex items-start space-x-2">
      <span className="text-blue-500 font-semibold">✔</span>
      <p>Comprehensive care with a focus on recovery, mobility, and well-being.</p>
    </li>
    <li className="flex items-start space-x-2">
      <span className="text-blue-500 font-semibold">✔</span>
      <p>Experienced and compassionate team committed to your health journey.</p>
    </li>
  </ul>

  {/* Button */}
  <div className="mt-4">
    <button className="bg-primary-dark text-white px-6 py-2 rounded-2xl hover:bg-transparent hover:text-primary-dark border-2 border-primary-dark transition-all duration-300 ">
      Book Appointment
    </button>
  </div>
</div>

    </div>
  );
};

export default Aboutdescription;
