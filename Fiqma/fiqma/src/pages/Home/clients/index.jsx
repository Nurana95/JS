// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";

import foto1 from "../../../../public/5.png"

// eslint-disable-next-line no-unused-vars
import styles from "../clients/styles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Client = () => {


    return (
        <div className="container">
            <div className="row my-5 ">
                <div className=" col-sm-12 col-lg-4 ">
                    <h1 className="">What our clients say about us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>

                <div className="col-sm-12  col-lg-8 ">


                    <div>
                        <h2 className="">The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.</h2>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex py-4">
                                <div className={styles.boxImg}>
                                    <img className=" " src={foto1} alt="" />
                                </div>
                                <div className="px-3">
                                    <h6>Jenny Wilson</h6>
                                    <p>Vice president</p></div>



                            </div>

                            <div className={`d-flex ${styles.btn1} justify-content-betweens align-items-center `}>

                                <button className=" w-50 h-50">  <FontAwesomeIcon icon={faChevronLeft} /></button>
                                <button className="  w-50  h-50 bg-info rounded-5"> <FontAwesomeIcon icon={faChevronRight} /></button></div> </div>


                    </div>


                </div>
            </div >
        </div >
    );
};

export default Client;
