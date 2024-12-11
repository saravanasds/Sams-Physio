"use client";

import React from "react";
import Team from "../about-components/Team"

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[400px] object-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/aboutbg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <h1 className="relative text-white text-4xl font-bold lg:text-5xl">
          About Us
        </h1>
      </div>
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-8">
          <div className="relative">
            <img
              src="/assets/dean.jpg"
              alt="Dean or Doctor"
              className="w-full lg:w-full rounded-xl shadow-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-sm rounded-b-xl p-4 text-white text-center tracking-wider">
              <h2 className="text-2xl font-bold mb-2">Meet Dr. Sam Clement</h2>
              <p className="text-lg font-medium">BPT., MPT., (PAEDIATRIC).</p>
            </div>
          </div>

          <div className="lg:w-2/3">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Dr.Sam Clement , the founder of Sam's Physio & Rehab, is a
              renowned physiotherapist with over 8 years of experience in the
              field. With a passion for helping individuals regain their
              mobility and improve their quality of life, Dr.Sam Clement has
              built a center that combines advanced techniques with a
              compassionate approach.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Under his leadership, our team has helped countless individuals
              overcome physical challenges, whether through sports injury
              recovery, chronic pain management, or rehabilitation after
              surgery. His vision is to provide holistic care tailored to the
              needs of each client.
            </p>
          </div>
        </div>
      </div>

      <Team/>

      {/* About Section */}
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary-dark mb-6">
          Sam's Physio & Re hab.
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mb-8">
          At <span className="font-semibold ">Sam's Physio & Rehab</span>, our
          mission is to empower individuals to achieve their best physical
          health. We are a team of experienced physiotherapists dedicated to
          providing personalized care using evidence-based practices and
          state-of-the-art facilities.
        </p>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Core Value 1 */}
          <div className="flex items-start gap-4">
            <img
              src="/assets/about3.jpg"
              alt="Experienced Team"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold text-primary-dark">
                Experienced Team
              </h3>
              <p className="text-gray-600">
                Our team combines years of experience with the latest
                physiotherapy techniques to ensure the best outcomes for our
                clients.
              </p>
            </div>
          </div>

          {/* Core Value 2 */}
          <div className="flex items-start gap-4">
            <img
              src="/assets/about1.jpg"
              alt="Personalized Care"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold text-primary-dark">
                Personalized Care
              </h3>
              <p className="text-gray-600">
                We tailor each treatment plan to the unique needs of every
                client, ensuring a holistic approach to recovery.
              </p>
            </div>
          </div>

          {/* Core Value 3 */}
          <div className="flex items-start gap-4">
            <img
              src="/assets/about2.jpg"
              alt="State-of-the-Art Facilities"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold text-primary-dark">
                State-of-the-Art Facilities
              </h3>
              <p className="text-gray-600">
                Our center is equipped with advanced equipment and tools to
                deliver effective treatments.
              </p>
            </div>
          </div>

          {/* Core Value 4 */}
          <div className="flex items-start gap-4">
            <img
              src="/assets/about4.jpg"
              alt="Compassionate Support"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold text-primary-dark">
                Compassionate Support
              </h3>
              <p className="text-gray-600">
                We understand the challenges of recovery and provide a
                supportive environment for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-dark py-12 text-center text-white">
        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
          Ready to Start Your Journey to Recovery?
        </h3>
        <p className="text-lg lg:text-xl">
          Contact us today to schedule your first session or learn more about
          our services.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-primary-dark font-semibold rounded-md hover:bg-gray-200">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
