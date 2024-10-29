import React, { useState } from "react";

const Game = () => {
  const [showMore, setShowMore] = useState(false);

  const initialItems = [
    { img: "/fc.avif", title: "EA SPORTC FC 25" },
    { img: "/efootball.avif", title: "eFootball" },
    { img: "/naruto.avif", title: "NARUTO STORM 4" },
    { img: "/tekken.webp", title: "TEKKEN 8" },
    { img: "/nba.avif", title: "NBA 2K25" },
  ];

  const additionalItems = [
    { img: "/cod.avif", title: "Call of Duty" },
    { img: "/dragonball.avif", title: "DRAGON BALL" },
    { img: "/wwe.avif", title: "WWE 2K24" },
    { img: "/ufc.avif", title: "UFC 5" },
    { img: "/re.avif", title: "Resident Evil 4" },
    { img: "/motogp.avif", title: "MotoGP 24" },
    { img: "/gow.avif", title: "God of War Ragnarok" },
    { img: "/eldenring.webp", title: "ELDEN RING" },
    { img: "/gta.avif", title: "Grand Theft Auto V" },
    { img: "/nfs.webp", title: "Need for Speed" },
  ];

  const itemsToDisplay = showMore
    ? [...initialItems, ...additionalItems]
    : initialItems;

  return (
    <section id="games">
      <div className="max-w-6xl p-4 pt-16 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-text">Games</h2>
          <p className="mt-2 mb-10 text-3xl font-bold tracking-tight text-center text-white sm:text-4xl">
            Favorite Games on PSLounge
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {itemsToDisplay.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center group">
              <img
                src={item.img}
                alt={`Image ${index + 1}`}
                className="object-cover w-48 h-48 transition border-4 border-gray-800 shadow-xl group-hover:scale-105 rounded-xl hover:border-blue-500 hover:shadow-blue-500/10"
              />
              <h3 className="text-lg text-white">{item.title}</h3>{" "}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-4 py-2 font-bold text-white transition rounded bg-text hover:bg-blue-500">
            {showMore ? "Hide" : "More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Game;
