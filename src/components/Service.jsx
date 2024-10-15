import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const menuItems = [
  {
    title: "Paket Sewa Harian",
    description:
      "Penyewaan PlayStation lengkap dengan game favorit untuk dinikmati selama satu hari penuh.",
    icon: "fas fa-gamepad",
  },
  {
    title: "Paket Sewa Mingguan",
    description: "Penyewaan PlayStation untuk penggunaan selama satu minggu.",
    icon: "fas fa-calendar-week",
  },
  {
    title: "Paket Sewa Event",
    description: "Sewa konsol PS beserta aksesoris untuk acara atau pesta.",
    icon: "fas fa-users",
  },
  {
    title: "Paket Sewa E-sport",
    description:
      "Penyewaan konsol dan peralatan gaming lengkap untuk kompetisi e-sport lokal.",
    icon: "fas fa-trophy",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      {/* Add animated gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-noise-pattern opacity-20"></div>

      {/* Subtle glowing accents */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-gradient-radial from-blue-800 via-transparent to-transparent w-96 h-96 rounded-full blur-2xl opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 bg-gradient-radial from-purple-800 via-transparent to-transparent w-80 h-80 rounded-full blur-2xl opacity-40"></div>

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 relative">
        <div className="mx-auto max-w-2xl lg:text-center flex flex-col items-center">
          <h2 className="text-base font-semibold leading-7 text-text">
            Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
            What are PSLounge Services?
          </p>
          <p className="mt-2 text-lg leading-8 text-gray-400 text-center">
            We provide various services to meet your gaming needs. From daily,
            weekly to event rental packages.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500 hover:shadow-blue-500/10">
              <div className="text-center mb-4 text-4xl text-white">
                <i className={item.icon}></i>
              </div>
              <h2 className="mt-4 text-xl font-bold text-white">
                {item.title}
              </h2>
              <p className="mt-1 text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
