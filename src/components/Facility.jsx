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
    name: "Pengiriman & Penjemputan Gratis",
    description:
      "Layanan pengiriman dan penjemputan gratis bagi pelanggan yang berada dalam jangkauan tertentu.",
    icon: "fas fa-truck",
  },
  {
    name: "Diskon Khusus ",
    description:
      "Pelanggan yang menyewa secara berkala akan mendapatkan diskon eksklusif.",
    icon: "fas fa-tags",
  },
  {
    name: "Dukungan Teknis & Setup Gratis",
    description:
      "Menyediakan dukungan teknis gratis, termasuk setup awal konsol dan troubleshooting.",
    icon: "fas fa-tools",
  },
];

function Facility() {
  return (
    <div id="facility">
      <div className="max-w-6xl p-4 pt-16 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-text">
            Benefits
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-center text-white sm:text-4xl">
            Benefits of Renting at PSLounge
          </p>
          <p className="mt-2 text-lg leading-8 text-center text-gray-400">
            The following are some of the benefits or advantages that PSLounge
            can offer you.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="text-center">
                <dt className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-text">
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
