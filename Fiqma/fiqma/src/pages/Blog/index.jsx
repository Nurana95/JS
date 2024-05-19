// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import foto from "../../../public/20.jpeg"
import BannerBlog from "../../Components/BannerBlog"
import { Link } from "react-router-dom";

const Blog = () => {
  const url = "http://localhost:3000/blog";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(url).then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <div className="container my-5">
      <div className=" d-flex justify-content-center" >

        <div className="d-flex w-50 flex-wrap">
          <h1 className="text-center ">A UX Case Study on Creating a Studious Environment for Students</h1>
          <p>Andrew Jonson Posted on 27th January 2021</p>
        </div></div>
      <img className=" img-fluid" src={foto} alt="" />
      <div className="d-flex my-3 justify-content-center">
        <div className="w-50 text-center">
          <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
          <Link
          >
            Read more
          </Link></div>
      </div>



      <div className=" my-5">
        <div className="d-flex my-5 justify-content-center">
          <h1 className="">Our Blog</h1></div>
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

export default Blog;
