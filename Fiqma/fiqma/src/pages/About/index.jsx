import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BannerAbout from '../../Components/BannerAbout';
import foto from "../../../public/1.jpeg"
import style from "../About/style.module.css"

const About = () => {
  const url = "http://localhost:3000/client";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(url)
      .then(({ data }) => {
        setData(data);
      })
      .catch(error => {
        console.error("Произошла ошибка при получении данных:", error);
      });
  }, []);

  return (
    <div>
      <div className='container my-5'>
        {data.map((item, id) => (
          id === 6 && (
            <BannerAbout
              key={id}
              h1={item.h1}
              h6={item.h6}
              p={item.p}
              img={item.img}
              id={id}
            />
          )
        ))}

        <div className={` row`}>
          <div className="col pe-md-0">
            <div className={` ${style.box} p-5`}>
              <h6 className="text-dark">Who we are</h6>
              <h1>Goal focussed</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div className="col p  ps-md-0">
            <div className={` ${style.box} p-5`}>
              <h6 className="text-dark">Who we are</h6>
              <h1>Goal focussed</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
        <img className={`w-100 object-fit-cover  ${style.imgBox}`} src={foto} alt="" />

        <div className='py-5'>
          <div className='d-flex justify-content-center align-content-center'>
            <h1>The process we follow</h1>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='d-flex my-2 align-items-center '>
                <div className={`${style.ball} me-2`}></div>
                <div className={`${style.dots} ms-2`}></div>
              </div>
              <h6>Planning</h6>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
            <div className='col'>
              <div className='d-flex my-2 align-items-center '>
                <div className={`${style.ball} me-2`}></div>
                <div className={`${style.dots} ms-2`}></div>
              </div>
              <h6>Conception</h6>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
            <div className='col'>
              <div className='d-flex my-2 align-items-center '>
                <div className={`${style.ball} me-2`}></div>
                <div className={`${style.dots} ms-2`}></div>
              </div>
              <h6>Design</h6>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
            <div className='col'>
              <div className='d-flex my-2 align-items-center '>
                <div className={`${style.ball} me-2`}></div>
                <div className={`${style.dots} ms-2`}></div>
              </div>
              <h6>Development</h6>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={` ${style.box}`}>

        <div className={`container py-5`}>
          {data.map((item, id) => (
            (id === 5 || id === 6) && (
              <BannerAbout
                key={id}
                h1={item.h1}
                h6={item.h6}
                p={item.p}
                img={item.img}
                id={id}
              />
            )
          ))}
        </div> </div>
      <div className='container py-5'>
        <div className='d-flex align-items-center justify-content-center'>
          <h1>The benefits of working with us</h1>
        </div>


      </div>


    </div>
  );
};

export default About;
