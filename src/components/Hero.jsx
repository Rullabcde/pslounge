import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="flex items-center min-h-screen">
      <div className="flex items-center justify-center w-full px-4 py-16 mx-auto md:py-24 lg:py-32">
        <div className="w-full max-w-xl px-4 mx-auto text-center">
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl text-text">
            Step Into the Ultimate
            <strong className="block mt-2 font-extrabold text-redterang">
              Gaming Arena
            </strong>
          </h1>

          <p className="px-4 mt-6 text-base leading-relaxed text-gray-400 md:text-lg lg:text-xl">
            Battle, strategy, adrenaline, victory, teamwork, esports, power-ups,
            challenges, multiplayer, immersive, leaderboard, action!
          </p>

          <div className="flex flex-col justify-center gap-4 px-4 mt-8 md:flex-row">
            <Link
              to="services"
              className="w-full px-8 py-4 text-base font-medium transition-colors duration-300 rounded-lg shadow-sm cursor-pointer md:w-auto text-text bg-redterang hover:bg-highpurple focus:ring-3 focus:outline-hidden">
              Get Started
            </Link>

            <Link
              to="services"
              className="w-full px-8 py-4 text-base font-medium transition-colors duration-300 border-2 rounded-lg shadow-sm cursor-pointer md:w-auto text-redterang hover:text-highpurple focus:ring-3 focus:outline-hidden border-redterang hover:border-highpurple">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
