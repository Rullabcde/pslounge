import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Service";
import Facility from "./components/Facility";
import Game from "./components/Game";
import Book from "./components/Book";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <Facility />
      <Game />
      <Book />
      <Faq />
      <Footer />
      <ChatBot />
    </div>
  </StrictMode>
);
