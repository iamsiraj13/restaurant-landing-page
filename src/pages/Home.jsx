import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import PopularFood from "../components/PopularFood";
import Booktable from "../components/Booktable";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div className="">
      <Navbar />

      <Hero />
      <About />
      <PopularFood />
      <Booktable />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
