import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Introduction from "../../components/introduction/Introduction";
import AboutUs from "../../components/about/AboutUs";
import Discount from "../../components/discount/Discount";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      {/* intro */}
      <Introduction />
      <AboutUs />
      <Discount />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
