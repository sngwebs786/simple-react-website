import React from "react";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import MyCard from "../components/MyCard";
import MyFeatures from "../components/MyFeatures";
import MyFooter from "../components/MyFooter";
import MyNavbar from "../components/MyNavbar";
const Home = () => {
  return (
    <div>
      <MyNavbar />
      <Hero/>
      <MyFeatures/>
      <MyCard/>
      <Contact/>
      <MyFooter/>
    </div>
  );
};

export default Home;
