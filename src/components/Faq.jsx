import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Mengimpor ikon

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqs = [
    {
      question: "Apa itu PS Lounge?",
      answer:
        "PS Lounge adalah sebuah tempat hiburan yang menyediakan layanan rental PlayStation dengan fasilitas cafe yang nyaman.",
    },
    {
      question: "Apa saja layanan yang tersedia di PS Lounge?",
      answer:
        "Kami menyediakan rental PlayStation, makanan dan minuman di cafe, serta berbagai paket menarik untuk para pelanggan.",
    },
    {
      question: "Apakah PS Lounge buka setiap hari?",
      answer: "Ya, PS Lounge buka setiap hari dari pukul 10:00 hingga 22:00.",
    },
    {
      question: "Apakah ada biaya tambahan untuk pengiriman dan penjemputan?",
      answer:
        "Kami menawarkan layanan pengiriman dan penjemputan gratis untuk area tertentu.",
    },
    {
      question: "Apa saja konsol yang tersedia untuk disewa di PSLounge?",
      answer:
        "Saat ini kami menyediakan PlayStation terbaru, seperti PS4 dan PS5, lengkap dengan kontroler dan pilihan game yang bervariasi.",
    },
    {
      question:
        "Apa yang harus dilakukan jika konsol atau game mengalami masalah teknis?",
      answer:
        "Jika terjadi masalah teknis selama masa sewa, Anda bisa segera menghubungi tim dukungan kami.",
    },
  ];

  return (
    <section id="faq" className="flex justify-center items-center h-screen">
      <div className="w-full max-w-2xl p-4">
        <div className="mx-auto max-w-2xl lg:text-center flex flex-col items-center">
          <h2 className="text-base font-semibold leading-7 text-text text-center">
            FAQ
          </h2>
          <p className="mt-2 mb-10 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
            Paling sering ditanyakan
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-lg font-medium text-white focus:outline-none flex justify-between items-center">
                {faq.question}
                {openIndex === index ? (
                  <FaChevronUp className="text-white" />
                ) : (
                  <FaChevronDown className="text-white" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-white">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
