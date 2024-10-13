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
      className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-blue-800/10">
                <svg
                  aria-hidden="true"
                  width="105"
                  height="78"
                  className="absolute left-6 top-6 fill-slate-100">
                  <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                </svg>
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900">
                    {testimonial.text}
                  </p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-300 pt-6">
                  <div>
                    <div className="font-display text-base text-slate-900">
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
