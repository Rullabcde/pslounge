import React, { useState } from "react";
import pes2019 from "../assets/pes2019.jpg";
import fifa2019 from "../assets/fifa2019.jpg";
import naruto from "../assets/naruto.jpg";
import gta from "../assets/gta.jpg";
import tekken from "../assets/tekken.jpg";
import gow from "../assets/gow.jpg";
import battlefield from "../assets/battlefield.jpg";
import spiderman from "../assets/spiderman.png";
import wwe from "../assets/wwe.jpg";
import ufc from "../assets/ufc.jpg";
import crash from "../assets/crash.jpg";
import horizon from "../assets/horizon.jpg";
import marvel from "../assets/marvel.jpg";
import nfs from "../assets/nfs.jpg";
import injustice from "../assets/injustice.jpg";

const Game = () => {
  const [showMore, setShowMore] = useState(false);

  const initialItems = [
    { img: pes2019, text: "PES 2019" },
    { img: fifa2019, text: "FIFA 2019" },
    { img: naruto, text: "NARUTO STORM 4" },
    { img: gta, text: "GTA V" },
    { img: tekken, text: "TEKKEN 7" },
  ];

  const additionalItems = [
    { img: battlefield, text: "BATTLEFIELD 4" },
    { img: spiderman, text: "SPIDERMAN" },
    { img: wwe, text: "WWE 2017" },
    { img: ufc, text: "UFC 2" },
    { img: crash, text: "CRASH BANDICOOT" },
    { img: horizon, text: "HORIZON ZERO DAWN" },
    { img: gow, text: "GOD OF WAR" },
    { img: marvel, text: "MARVEL VS CAPCOM" },
    { img: injustice, text: "INJUSTICE 2" },
    { img: nfs, text: "NEED FOR SPEED" },
  ];

  const itemsToDisplay = showMore
    ? [...initialItems, ...additionalItems]
    : initialItems;

  return (
    <section id="games" className="w-full p-8">
      <div className="mx-auto max-w-6xl">
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
                className="w-48 h-48 object-cover mb-2 group-hover:scale-105 rounded-xl border-4 border-gray-800 shadow-xl transition hover:border-blue-500 hover:shadow-blue-500/10"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                <p className="text-white font-bold text-lg md:text-xl text-center">
                  {item.text}
                </p>
              </div>
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
