import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Product from "./Components/Products/Product";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Offer from "./Components/Offer/Offer";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Top from "./Components/TopHero/Top";
import GoTopButton from "./Components/GotoButton/GotoButton";
import Services from "./Components/Services/Services";
const App = () => {
  return (
    <>
      <Top />
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Title subtitle="Services" title="Software applications for Users " />
        <Services />
        <Title
          title="What can we build for you today?"
          subtitle="Empowering Teams to Deliver Exceptional Software Solutions"
        />
        <Offer />
        <Title subtitle="Products" title="What we have built" />
        <Product />
        <Title subtitle="Testimonials" title="What clients says" />
        <Testimonials />
        <Title subtitle="Contact Us" title="Get Intouch" />
        <Contact />
      </div>
      <Footer />
      <GoTopButton />
    </>
  );
};

export default App;
