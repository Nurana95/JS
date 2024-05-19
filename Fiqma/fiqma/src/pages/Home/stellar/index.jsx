import React from "react";
import styles from "../stellar/styles.module.css";
import foto1 from "../../../../public/6.jpeg";
import { FaLongArrowAltRight } from "react-icons/fa";

const Stellar = () => {
    return (
        <div className="container">
            <div className="row my-5  col-lg-12">
                <div className={`col p-0 ${styles.bckImg}`} style={{
                    backgroundImage: `url(${foto1})`
                }}>
                    <div className={` h-100 ${styles.bgColor} `}>
                        <div className=" p-5">
                            <div className="m-5">
                                <h1 className="text-white " style={{ fontSize: "54px" }}>Building stellar websites for early startups </h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                            </div></div></div>
                </div>

                <div className={` col ${styles.blue}`}>
                    <div className={`m-5 p-5 text-white`}>
                        <h4>Send Inquiry</h4>
                        <p className="py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                        <form action="" className={`${styles.form}`}>
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Paste your Fiqma design Url" />
                            <button type="submit"> Send An Inquiry</button>
                            <button className={` ${styles.submit} `}> Get in touch with us <FaLongArrowAltRight className={styles.arrow} /> </button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Stellar;
