import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";
import HowItWorks from "../components/HowItWorks";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Home = () => {
  return (
    <>
      <Hero />
      {/* Next sections will come here */}
      <Services />
      <Work />
      <HowItWorks />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;