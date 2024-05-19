// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./style.module.css";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";

import { FaLongArrowAltRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const BannerBlog = ({ time, h1, img, p }) => {
  return (
    <div className={styles.banner}>
      <div className="container">
        <h1>Our Blog</h1>
        <div className="row col-lg-3 align-items-center justify-content-between ">
          <div className="col">
            <img src={img} alt="" />
            <p>{time}</p>
            <h1>{h1}</h1>
            <p>{p}</p>

            <button> Read More  <FaLongArrowAltRight className={styles.arrow} /> </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BannerBlog;
