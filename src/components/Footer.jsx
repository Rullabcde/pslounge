import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-second">
      <div className="container flex flex-col items-center mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-10">
          <div className="flex flex-col items-center">
            <a
              href="https://www.instagram.com/rullabcd"
              target="_blank"
              rel="noopener noreferrer">
              <i className="text-3xl text-blue-500 fab fa-instagram"></i>
            </a>
            <span className="mt-2 font-semibold text-white">INSTAGRAM</span>
            <span className="text-blue-500">@pslounge</span>
          </div>
          <div className="h-12 border-l-2 border-blue-500"></div>
          <div className="flex flex-col items-center">
            <a
              href="https://www.facebook.com/pslounge.indonesia"
              target="_blank"
              rel="noopener noreferrer">
              <i className="text-3xl text-blue-500 fab fa-facebook"></i>
            </a>
            <span className="mt-2 font-semibold text-white">FACEBOOK</span>
            <span className="text-blue-500">PSLounge Indonesia</span>
          </div>
          <div className="h-12 border-l-2 border-blue-500"></div>
          <div className="flex flex-col items-center">
            <a href="mailto:akunquiziz226@gmail.com">
              <i className="text-3xl text-blue-500 fas fa-envelope"></i>
            </a>
            <span className="mt-2 font-semibold text-white">EMAIL</span>
            <span className="text-blue-500">pslounge@gmail.com</span>
          </div>
          <div className="h-12 border-l-2 border-blue-500"></div>
          <div className="flex flex-col items-center">
            <a
              href="https://www.youtube.com/@rullabcd"
              target="_blank"
              rel="noopener noreferrer">
              <i className="text-3xl text-blue-500 fab fa-youtube"></i>
            </a>
            <span className="mt-2 font-semibold text-white">YOUTUBE</span>
            <span className="text-blue-500">psloungeidn</span>
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
