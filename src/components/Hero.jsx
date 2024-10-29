import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="flex items-center justify-center h-screen">
      <div
        className="container relative max-w-6xl text-center ml-7 lg:ml-10 md:ml-10 sm:ml-10"
        data-aos="fade-right">
        <div className="absolute top-0 left-0 border-l-4 h-36 border-text lg:h-60 md:h-48 sm:h-40"></div>
        <div className="absolute bottom-0 left-0 border-l-4 h-36 border-text lg:h-60 md:h-48 sm:h-40"></div>
        <div className="ml-4 text-left">
          <h2 className="mb-6 text-4xl font-bold text-white lg:text-7xl md:text-5xl">
            Step Into the Ultimate <br /> Gaming Arena!
          </h2>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="px-4 py-2 font-bold text-white transition duration-300 rounded cursor-pointer bg-text hover:bg-blue-800 md:px-6 md:py-3">
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
