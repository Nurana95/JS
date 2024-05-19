// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./style.module.css";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";


import { FaLongArrowAltRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const BannerBlog = ({ time, h1, img, p, index }) => {
  return (

    <div className={`col ${index === 0 || index === 2 ? "p-0" : ""}`}>

      <img className="img-fluid" src={img} alt="" />
      <p className="py-3">{time}</p>
      <h5 className=" w-75">{h1}</h5>
      <p >{p}</p>
      <button className=" text-dark"> Read More  <FaLongArrowAltRight className={styles.arrow} /> </button>

    </div>



  );
};

export default BannerBlog;
