import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Set isScrolled based on scroll position
    if (currentScrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Determine scroll direction
    if (currentScrollY > lastScrollY) {
      // Scroll down, hide navbar
      setIsVisible(false);
    } else {
      // Scroll up, show navbar
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the mobile menu state
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full p-4 transition-all duration-300 z-20 ${
        isScrolled
          ? "bg-second bg-opacity-70 backdrop-blur-sm py-2 max-w-4xl rounded-full shadow-lg top-3"
          : "bg-transparent max-w-full"
      } z-10 ${isVisible ? "translate-y-0" : "-translate-y-40"}`}>
      <div className="container mx-auto flex justify-between items-center max-w-6xl">
        <h1
          className={`text-text text-xl font-bold transition-all duration-300 ml-7 sm:ml-10 lg:text-2xl ${
            isScrolled ? "ml-10" : ""
          }`}>
          PSLounge
        </h1>

        {/* Animasi Icon Hamburger */}
        <motion.div
          className={`md:hidden text-2xl cursor-pointer mr-7 sm:mr-10 ${
            isScrolled ? "text-white" : "text-white"
          }`}
          onClick={toggleMenu}
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }} // Rotasi saat diklik
          transition={{ duration: 0.3 }}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.div>

        {/* Animasi Menu */}
        <motion.ul
          initial={{ opacity: 0, y: -50 }} // Kondisi awal saat menu belum terbuka
          animate={{
            opacity: isOpen || window.innerWidth >= 768 ? 1 : 0, // Menu tetap terlihat pada layar besar
            y: isOpen || window.innerWidth >= 768 ? 0 : -50, // Menu turun pada layar besar
          }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col items-center space-y-4 text-base md:flex-row md:space-x-4 md:space-y-0 md:mt-0 md:items-center lg:text-lg ${
            isOpen
              ? "absolute top-14 py-2 shadow-lg left-0 w-full bg-second"
              : "hidden"
          } md:flex bg-second rounded-lg md:bg-transparent`}>
          {["home", "services", "benefits", "games", "clients", "FAQ"].map(
            (section) => (
              <li key={section} className="relative group">
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  className="text-white transition duration-300 relative cursor-pointer"
                  onClick={() => setIsOpen(false)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className="block h-0.5 bg-text absolute left-0 right-0 bottom-0 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            )
          )}

          <li className="md:hidden">
            <Link
              to="book"
              smooth={true}
              duration={500}
              className="bg-text text-white font-bold py-2 px-4 rounded-full hover:bg-blue-500 transition-all duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)}>
              Book
            </Link>
          </li>
        </motion.ul>

        <Link
          to="book"
          smooth={true}
          duration={500}
          className={`bg-text text-white font-bold py-2 px-4 rounded-full ml-4 hover:bg-blue-500 transition-all duration-300 cursor-pointer hidden md:block`}>
          Book
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
