/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Banner = ({ title, description, image, button, viewPricing = false }) => {
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className="row align-items-center justify-content-between ">
          <div className="col">

            <p className={styles.slogan}>{title}</p>


            <p className={styles.subSlogan}>{description}</p>

            {button}
            {viewPricing && (
              <Link className={styles.pricingBtn} to="/">
                View Pricing <FaLongArrowAltRight className={styles.arrow} />
              </Link>
            )}
          </div>
          <div className="col ">
            <img src={image} alt="banner image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
