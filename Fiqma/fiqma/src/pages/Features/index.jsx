// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Banner from '../../Components/Banner';
import axios from "axios";
import BannerFeatures from '../../Components/BannerFeatures';
import BannerAbout from "../../Components/BannerAbout";
import foto from "../../../public/1.jpeg"
const Features = () => {
  const url = "http://localhost:3000/posts";
  const [data, setData] = useState([]);
  const urlclient = "http://localhost:3000/client";
  const [data1, setData1] = useState([]);

  useEffect(() => {
    axios(url).then(({ data }) => {
      setData(data);
    }).catch(error => {
      console.error("Произошла ошибка при получении данных:", error);
    });

    axios(urlclient).then(({ data }) => {
      setData1(data);
    }).catch(error => {
      console.error("Произошла ошибка при получении данных:", error);
    });
  }, []);

  return (
    <div>
      <Banner
        title="All the features you need"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. View our work View Pricing"
        image="/FeatureHeroIllustration.svg"
        button={
          <Link className="ourWorkBtn" to="/">
            View Pricing
          </Link>
        }
      />
      <div className="container">
        <div className="row row-gap-4 column-gap-md-4 justify-content-between">
          {data.slice(0, 3).map((item, id) => (
            <BannerFeatures
              className="bg-secondary"
              key={id}
              h1={item.h1}
              h6={item.h6}
              p={item.p}
              index={id}
            />
          ))}
        </div>
        {data1.map((item, id) => (
          <BannerAbout
            key={id}
            h1={item.h1}
            h6={item.h6}
            p={item.p}
            img={item.img}
            id={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
