/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "../../Components/Banner";
import { Link } from "react-router-dom";
import Home2 from "./home2";
import Features from "./Features";
import Client from "./clients";
import Frequently from "./frequently";
import Stellar from "./stellar";
import OurBlog from "./Blog1";

const Home = () => {
  return (
    <div>
      <Banner
        title="Building stellar websites for early startups"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt. View our work View Pricing"
        image="/Illustration.svg"
        button={
          <Link className="ourWorkBtn" to="/">
            View our work
          </Link>
        }
        viewPricing
      />
      <Home2 />
      <Features />
      <Client />
      <Frequently />
      <Stellar />
      <OurBlog />
    </div>
  );
};

export default Home;
