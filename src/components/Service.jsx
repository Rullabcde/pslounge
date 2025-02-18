import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const menuItems = [
  {
    title: "Paket Full Day",
    description: "Rent a PlayStation with your favorite games for a full day.",
    icon: "fas fa-gamepad",
  },
  {
    title: "Paket Weekly",
    description: "Weekly PlayStation rental available.",
    icon: "fas fa-calendar-week",
  },
  {
    title: "Paket Event",
    description: "Rent a PS console with accessories for events or parties.",
    icon: "fas fa-users",
  },
  {
    title: "Paket E-Sport",
    description:
      "Complete gaming setup rental for local e-sports competitions.",
    icon: "fas fa-trophy",
  },
];

function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-6xl p-4 pt-16 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-redterang">
            Services
          </h2>
          <p className="text-3xl font-extrabold tracking-tight text-center text-gray-900 t sm:text-4xl">
            What are PSLounge Services?
          </p>
          <p className="max-w-lg mx-auto mt-4 mb-6 text-center text-gray-500">
            We provide various services to meet your gaming needs. From daily,
            weekly to event rental packages.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 mb-6 md:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="block p-8 text-center transition border shadow-xl border-borderabu rounded-xl hover:border-highpurple hover:shadow-purple-500/10">
              <div className="mb-4 text-4xl text-center text-redterang">
                <i className={item.icon}></i>
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-900">
                {item.title}
              </h2>
              <p className="mt-1 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
