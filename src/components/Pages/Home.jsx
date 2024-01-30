import React from "react";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import TopProducts from "../TopProducts/TopProducts";
import Banner from "../Banner/Banner";
import AppStore from "../AppStore/AppStore";
import Testimonials from "../Testimonials/Testimonials";
import Electronic from "../Electronic/Electronic";

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <TopProducts />
      <Electronic />
      <Banner />
      <AppStore />
      <Products />
      <Testimonials />
    </div>
  );
};

export default Home;
