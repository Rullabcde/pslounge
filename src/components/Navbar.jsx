import { useState, useEffect, useRef } from "react";
import { X, Menu } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { to: "hero", label: "Home" },
    { to: "services", label: "Services" },
    { to: "facility", label: "Benefits" },
    { to: "games", label: "Games" },
    { to: "faq", label: "FAQ" },
  ];

  const logo = {
    url: "/logo.png",
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 mx-auto transition-all duration-300 sm:px-6 lg:px-8">
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "mt-4 bg-second backdrop-blur-md shadow-lg rounded-full"
            : "bg-transparent"
        }`}
        ref={navRef}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <a href="/" className="flex items-center text-text">
              <img
                src={logo.url}
                alt="logo-pslounge"
                className="w-[60px] h-[60px]"
                loading="lazy"
              />
              <h1 className="hidden md:font-bold md:flex md:text-2xl">
                PSLounge
              </h1>
            </a>
            <div className="items-center hidden space-x-4 md:flex">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="px-3 py-2 font-medium text-white rounded-md cursor-pointer text-md hover:text-text"
                  activeClass="text-blue-500">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label={isOpen ? "Close menu" : "Open menu"}>
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-y-0 right-0 w-64 z-40 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden overflow-y-auto`}>
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
              className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md cursor-pointer hover:text-blue-600"
              activeClass="text-blue-500">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
