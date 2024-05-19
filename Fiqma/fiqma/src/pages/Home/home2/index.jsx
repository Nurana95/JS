// eslint-disable-next-line no-unused-vars
import React from "react";
import foto1 from "../../../../public/3.png";
import foto2 from "../../../../public/4.png";
import foto3 from "../../../../public/2.png";
import { FaLongArrowAltRight } from "react-icons/fa";

// eslint-disable-next-line no-unused-vars
import styles from "../home2/styles.module.css"; // Stil dosyasını içe aktarın

const Home2 = () => {
    return (
        <div className="container">
            <div className=" my-5 d-flex justify-content-between">
                <h1>View our projects</h1>
                <button>View More <FaLongArrowAltRight className={styles.arrow} /></button>
            </div>


            <div className="row">
                <div className="col-8 position-relative">
                    <div className={`${styles.box} ${styles.box1} `}>
                        <h1>Workhub office Webflow Webflow Design</h1>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam</p>
                        <button> View portofilio <FaLongArrowAltRight className={styles.arrow} /></button>

                    </div>
                    <img className="img-fluid" src={foto1} alt="" /></div>
                <div className="col-4">

                    <div className="h-50 position-relative">  <img className="img-fluid" src={foto2} alt="" />
                        <div className={styles.box}>
                            <h1>Unisaas Website Design</h1>


                            <button> View portofilio <FaLongArrowAltRight className={styles.arrow} /></button>
                        </div>
                    </div><div className="h-50">  <img className="img-fluid" src={foto3} alt="" />
                    </div>
                </div>

            </div>




        </div >
    );
};

export default Home2;
