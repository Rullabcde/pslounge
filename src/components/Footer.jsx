import React from "react";

const Footer = () => {
  return (
    <footer className="bg-second py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10">
          <div className="flex flex-col items-center">
            <a
              href="https://www.instagram.com/rullabcd"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-instagram text-blue-500 text-3xl"></i>
            </a>
            <span className="mt-2 text-white font-semibold">INSTAGRAM</span>
            <span className="text-blue-500">@pslounge</span>
          </div>
          <div className="border-l-2 h-12 border-blue-500"></div>
          <div className="flex flex-col items-center">
            <a
              href="https://www.facebook.com/pslounge.indonesia"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-facebook text-blue-500 text-3xl"></i>
            </a>
            <span className="mt-2 text-white font-semibold">FACEBOOK</span>
            <span className="text-blue-500">PSLounge Indonesia</span>
          </div>
          <div className="border-l-2 h-12 border-blue-500"></div>
          <div className="flex flex-col items-center">
            <a href="mailto:akunquiziz226@gmail.com">
              <i className="fas fa-envelope text-blue-500 text-3xl"></i>
            </a>
            <span className="mt-2 text-white font-semibold">EMAIL</span>
            <span className="text-blue-500">pslounge@gmail.com</span>
          </div>
          <div className="border-l-2 h-12 border-blue-500"></div>
          <div className="flex flex-col items-center">
            <a
              href="https://www.youtube.com/@rullabcd"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-youtube text-blue-500 text-3xl"></i>
            </a>
            <span className="mt-2 text-white font-semibold">YOUTUBE</span>
            <span className="text-blue-500">psloungeidn</span>
          </div>
        </div>
        <div className="text-center mt-6 text-white text-sm">
          © 2024 PSLounge. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
