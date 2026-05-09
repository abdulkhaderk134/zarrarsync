import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Solutions from "../components/Solutions";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Home = () => {
  return (
    <>
      <Hero />
      {/* Next sections will come here */}
      <Services />
      <Solutions />
      <Pricing />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;