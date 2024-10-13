import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Service";
import Facility from "./components/Facility";
import Game from "./components/Game";
import Client from "./components/Client";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-bg">
      <Navbar />
      <Hero />
      <Services />
      <Facility />
      <Game />
      <Client />
      <Faq />
      <Footer />
    </div>
  </StrictMode>
);
