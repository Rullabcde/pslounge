import React from "react";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";

const testimonials = [
  {
    name: "Edi",
    text: "Pengalaman bermain yang luar biasa! Semua peralatan dalam kondisi terbaik dan pelayanan sangat ramah.",
    imgSrc: client1,
  },
  {
    name: "Pator",
    text: "Sangat puas dengan layanan rental PS ini! Harga terjangkau dan koleksi game-nya lengkap.",
    imgSrc: client2,
  },
  {
    name: "Mayjen",
    text: "Rental PS ini benar-benar membuat pesta kami lebih seru! Anak-anak sangat menikmati waktu bermain mereka.",
    imgSrc: client3,
  },
];

function Client() {
  return (
    <section
      id="clients"
      aria-label="What our customers are saying"
      className="relative py-24 sm:py-32 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      {/* Background with noise pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-noise-pattern opacity-20"></div>

      {/* Glowing accent circles */}
      <div className="absolute top-1/4 left-1/4 bg-gradient-radial from-blue-700 via-transparent to-transparent w-72 h-72 rounded-full blur-2xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 bg-gradient-radial from-purple-700 via-transparent to-transparent w-72 h-72 rounded-full blur-2xl opacity-30"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:text-center flex flex-col items-center">
          <h2 className="text-base font-semibold leading-7 text-text">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
            What Our Customers Are Saying
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <li key={index}>
              <figure className="relative rounded-2xl bg-gray-800 p-6 shadow-xl shadow-blue-800/10 transition hover:shadow-blue-500/20">
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-gray-200">
                    {testimonial.text}
                  </p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-gray-700 pt-6">
                  <div>
                    <div className="font-display text-base text-gray-300">
                      {testimonial.name}
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-50">
                    <img
                      alt={testimonial.name}
                      className="h-14 w-14 object-cover"
                      src={testimonial.imgSrc}
                    />
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Client;
