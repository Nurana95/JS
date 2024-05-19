// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import styles from "./style.module.css";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";

import BannerBlog from "../../../Components/BannerBlog"

const OurBlog = () => {
  const url = "http://localhost:3000/blog";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(url).then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <div className="container ">
      <div className="my-5">
        <h1 className="">Our Blog</h1>
        <div className="row col-lg-12 ">
          {data.map((item, id) => (
            <BannerBlog
              key={id}
              h1={item.h1}
              p={item.p}
              time={item.time}
              img={item.img}
              index={id}
            />
          ))}
        </div></div></div>
  );
};

export default OurBlog;
