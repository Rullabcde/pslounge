import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero">
      <div className="max-w-screen-xl px-4 py-32 mx-auto lg:flex h-screen lg:items-center">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-text sm:text-5xl">
            Step Into the Ultimate
            <strong className="font-extrabold text-redterang sm:block">
              {" "}
              Gaming Arena{" "}
            </strong>
          </h1>

          <p className="mt-4 text-gray-400 sm:text-xl/relaxed">
            Battle, strategy, adrenaline, victory, teamwork, esports, power-ups,
            challenges, multiplayer, immersive, leaderboard, action!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="services"
              className="block w-full px-12 py-3 text-sm font-medium rounded-lg shadow-sm cursor-pointer text-text bg-redterang hover:bg-highpurple focus:ring-3 focus:outline-hidden sm:w-auto">
              Get Started
            </Link>

            <Link
              to="services"
              className="block w-full px-12 py-3 text-sm font-medium rounded-lg shadow-sm cursor-pointer text-redterang hover:text-highpurple focus:ring-3 focus:outline-hidden sm:w-auto">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
