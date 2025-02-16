import React from "react";
import { Star, Clock, Gamepad } from "lucide-react";

const FeaturedGames = () => {
  const games = [
    {
      id: 1,
      title: "EA SPORTC FC 25",
      image: "/fc.avif",
      price: "25.000",
      duration: "24 Hours",
      platform: "PS5",
      rating: 4.9,
      available: true,
    },
    {
      id: 2,
      title: "NARUTO STORM 4",
      image: "/naruto.avif",
      price: "30.000",
      duration: "24 Hours",
      platform: "PS5",
      rating: 4.8,
      available: true,
    },
    {
      id: 3,
      title: "TEKKEN 8",
      image: "/tekken.webp",
      price: "28.000",
      duration: "24 Hours",
      platform: "PS5",
      rating: 4.7,
      available: false,
    },
    {
      id: 4,
      title: "NBA 2K25",
      image: "/nba.avif",
      price: "25.000",
      duration: "24 Hours",
      platform: "PS5",
      rating: 4.8,
      available: true,
    },
  ];

  return (
    <section id="games">
      <div className="max-w-6xl p-4 pt-16 mx-auto mb-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-text">Games</h2>

          <p className="text-3xl font-extrabold tracking-tight text-center t sm:text-4xl text-redterang ">
            Favorite Games on PSLounge
          </p>
          <p className="max-w-lg mx-auto mt-4 mb-6 text-center text-gray-400">
            Discover our collection of premium games available for rent.
            Experience the latest and greatest titles without breaking the bank.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <div
              key={game.id}
              className="overflow-hidden transition-transform duration-300 rounded-lg shadow-lg bg-second border-borderabu hover:scale-105">
              <div className="relative">
                <img
                  src={game.image}
                  alt={game.title}
                  className="object-cover w-full h-40"
                />
                <span
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                    game.available
                      ? "bg-highgreen text-text"
                      : "bg-highred text-text"
                  }`}>
                  {game.available ? "Available" : "Rented"}
                </span>
              </div>

              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-text">
                  {game.title}
                </h3>

                <div className="flex items-center gap-2 mb-2 text-gray-400">
                  <Gamepad size={16} />
                  <span className="text-sm">{game.platform}</span>
                </div>

                <div className="flex items-center gap-2 mb-2 text-gray-400">
                  <Clock size={16} />
                  <span className="text-sm">{game.duration}</span>
                </div>

                <div className="flex items-center gap-2 mb-4 text-gray-400">
                  <Star size={16} className="text-highyellow" />
                  <span className="text-sm">{game.rating} / 5.0</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-text">
                    Rp {game.price}
                  </span>
                  <button
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      game.available
                        ? "text-text bg-redterang hover:bg-highpurple"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!game.available}>
                    {game.available ? "Rent Now" : "Not Available"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
