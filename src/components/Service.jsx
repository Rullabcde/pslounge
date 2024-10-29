import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const menuItems = [
  {
    title: "Paket Harian",
    description:
      "Penyewaan PlayStation lengkap dengan game favorit untuk dinikmati selama satu hari penuh.",
    icon: "fas fa-gamepad",
  },
  {
    title: "Paket Mingguan",
    description: "Penyewaan PlayStation untuk penggunaan selama satu minggu.",
    icon: "fas fa-calendar-week",
  },
  {
    title: "Paket Event",
    description: "Sewa konsol PS beserta aksesoris untuk acara atau pesta.",
    icon: "fas fa-users",
  },
  {
    title: "Paket E-sport",
    description:
      "Penyewaan konsol dan peralatan gaming lengkap untuk kompetisi e-sport lokal.",
    icon: "fas fa-trophy",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="max-w-6xl p-4 pt-16 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-text">
            Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-center text-white sm:text-4xl">
            What are PSLounge Services?
          </p>
          <p className="mt-2 text-lg leading-8 text-center text-gray-400">
            We provide various services to meet your gaming needs. From daily,
            weekly to event rental packages.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:border-blue-500 hover:shadow-blue-500/10">
              <div className="mb-4 text-4xl text-center text-white">
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
