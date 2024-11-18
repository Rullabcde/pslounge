import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-second">
      <div className="container flex flex-col items-center mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-10">
          <div className="flex flex-col items-center">
            <a
              href="https://www.instagram.com/pslounge"
              target="_blank"
              rel="noopener noreferrer">
              <i className="text-3xl text-blue-500 fab fa-instagram"></i>
            </a>
            <span className="mt-2 font-semibold text-white">INSTAGRAM</span>
          </div>
          <div className="h-12 border-l-2 border-blue-500"></div>
          <div className="flex flex-col items-center">
            <a
              href="https://www.tiktok.com/pslounge"
              target="_blank"
              rel="noopener noreferrer">
              <i className="text-3xl text-blue-500 fab fa-tiktok"></i>
            </a>
            <span className="mt-2 font-semibold text-white">TIKTOK</span>
          </div>
          <div className="h-12 border-l-2 border-blue-500"></div>
          <div className="flex flex-col items-center">
            <a href="mailto:pslpunge@gmail.com">
              <i className="text-3xl text-blue-500 fas fa-envelope"></i>
            </a>
            <span className="mt-2 font-semibold text-white">EMAIL</span>
          </div>
        </div>
        <div className="mt-6 text-sm text-center text-white">
          © 2024 PSLounge. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
