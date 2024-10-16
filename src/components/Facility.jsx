import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const features = [
  {
    name: "Akses ke Katalog Game Terbaru",
    description:
      "Setiap pelanggan PSLounge mendapatkan akses ke katalog game terbaru.",
    icon: "fas fa-gamepad",
  },
  {
    name: "Pengiriman dan Penjemputan Gratis",
    description:
      "Layanan pengiriman dan penjemputan gratis bagi pelanggan yang berada dalam jangkauan tertentu.",
    icon: "fas fa-truck",
  },
  {
    name: "Diskon Khusus Langganan Berkala",
    description:
      "Pelanggan yang menyewa secara berkala akan mendapatkan diskon eksklusif.",
    icon: "fas fa-tags",
  },
  {
    name: "Dukungan Teknis dan Setup Gratis",
    description:
      "Menyediakan dukungan teknis gratis, termasuk setup awal konsol dan troubleshooting.",
    icon: "fas fa-tools",
  },
];

function Facility() {
  return (
    <div
      id="benefits"
      className="relative py-24 sm:py-32 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      {/* Add animated gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-noise-pattern opacity-20"></div>

      {/* Subtle glowing accents */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-gradient-radial from-blue-800 via-transparent to-transparent w-96 h-96 rounded-full blur-2xl opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 bg-gradient-radial from-purple-800 via-transparent to-transparent w-80 h-80 rounded-full blur-2xl opacity-40"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:text-center flex flex-col items-center">
          <h2 className="text-base font-semibold leading-7 text-text">
            Benefits
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
            Benefits of Renting at PSLounge
          </p>
          <p className="mt-2 text-lg leading-8 text-gray-400 text-center">
            The following are some of the benefits or advantages that PSLounge
            can offer you.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="text-center">
                <dt className="flex flex-col items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-text">
                    <i className={feature.icon + " text-white text-2xl"}></i>
                  </div>
                  <p className="mt-4 text-base font-semibold leading-7 text-white">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Facility;
