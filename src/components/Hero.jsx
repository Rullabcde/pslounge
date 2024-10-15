import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 relative">
      {/* Add animated gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-noise-pattern opacity-20"></div>

      {/* Subtle glowing accents */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-gradient-radial from-blue-800 via-transparent to-transparent w-96 h-96 rounded-full blur-2xl opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 bg-gradient-radial from-purple-800 via-transparent to-transparent w-80 h-80 rounded-full blur-2xl opacity-40"></div>

      <div
        className="container max-w-6xl text-center relative ml-7 lg:ml-10 md:ml-10 sm:ml-10"
        data-aos="fade-right">
        <div className="absolute left-0 top-0 h-36 border-l-4 border-text lg:h-60 md:h-48 sm:h-40"></div>
        <div className="absolute left-0 bottom-0 h-36 border-l-4 border-text lg:h-60 md:h-48 sm:h-40"></div>
        <div className="text-left ml-4 relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-white lg:text-7xl md:text-5xl">
            Step Into the Ultimate <br /> Gaming Arena!
          </h2>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="bg-text text-white font-bold px-4 py-2 rounded hover:bg-blue-500 transition duration-300 cursor-pointer md:px-6 md:py-3">
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
