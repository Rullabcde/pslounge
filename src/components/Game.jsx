import React, { useState } from "react";
import fc from "../assets/fc.avif";
import efootball from "../assets/efootball.avif";
import naruto from "../assets/naruto.avif";
import gta from "../assets/gta.avif";
import tekken from "../assets/tekken.webp";
import gow from "../assets/gow.avif";
import dragonball from "../assets/dragonball.avif";
import cod from "../assets/cod.avif";
import wwe from "../assets/wwe.avif";
import ufc from "../assets/ufc.avif";
import elden from "../assets/eldenring.webp";
import gp from "../assets/motogp.avif";
import nba from "../assets/nba.avif";
import nfs from "../assets/nfs.webp";
import re from "../assets/re.avif";

const Game = () => {
  const [showMore, setShowMore] = useState(false);

  const initialItems = [
    { img: fc, title: "EA SPORTC FC 25" },
    { img: efootball, title: "eFootball" },
    { img: naruto, title: "NARUTO STORM 4" },
    { img: tekken, title: "TEKKEN 8" },
    { img: nba, title: "NBA 2K25" },
  ];

  const additionalItems = [
    { img: cod, title: "Call of Duty" },
    { img: dragonball, title: "DRAGON BALL" },
    { img: wwe, title: "WWE 2K24" },
    { img: ufc, title: "UFC 5" },
    { img: re, title: "Resident Evil 4" },
    { img: gp, title: "MotoGP 24" },
    { img: gow, title: "God of War Ragnarok" },
    { img: elden, title: "ELDEN RING" },
    { img: gta, title: "Grand Theft Auto V" },
    { img: nfs, title: "Need for Speed" },
  ];

  const itemsToDisplay = showMore
    ? [...initialItems, ...additionalItems]
    : initialItems;

  return (
    <section
      id="games"
      className="relative py-24 sm:py-32 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      {/* Add animated gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-noise-pattern opacity-20"></div>

      {/* Subtle glowing accents */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-gradient-radial from-blue-800 via-transparent to-transparent w-96 h-96 rounded-full blur-2xl opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 bg-gradient-radial from-purple-800 via-transparent to-transparent w-80 h-80 rounded-full blur-2xl opacity-40"></div>

      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 relative">
        <div className="mx-auto max-w-2xl lg:text-center flex flex-col items-center">
          <h2 className="text-base font-semibold leading-7 text-text">Games</h2>
          <p className="mt-2 mb-10 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
            Favorite Games on PSLounge
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {itemsToDisplay.map((item, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center">
              <img
                src={item.img}
                alt={`Image ${index + 1}`}
                className="w-48 h-48 object-cover group-hover:scale-105 rounded-xl border-4 border-gray-800 shadow-xl transition hover:border-blue-500 hover:shadow-blue-500/10"
              />
              <h3 className="text-white text-lg">{item.title}</h3>{" "}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-text text-white font-bold px-4 py-2 rounded hover:bg-blue-500 transition">
            {showMore ? "Hide" : "More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Game;
