import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Clients from "./sections/Clients";
import WhyChooseUs from "./sections/WhyChooseUs";
import Industries from "./sections/Industries";
import ServiceAreas from "./sections/ServiceAreas";
import WhyWebDesino from "./sections/WhyWebDesino";
import Portfolio from "./sections/Portfolio";
import LocalPresence from "./sections/LocalPresence";
import Blog from "./sections/Blog";
import FAQ from "./sections/FAQ";
import Stats from "./sections/Stats";
import Consultation from "./sections/Consultation";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <WhyChooseUs />
      <Industries />
      <WhyWebDesino />
      <Portfolio />
      <LocalPresence />
      <Blog />
      <Stats />
      <Consultation />
      <FAQ />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;