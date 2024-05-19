import React, { useState, useEffect } from 'react';
import Frequently from '../Home/frequently';
import styles from "../Pricing/styles.module.css";
import axios from 'axios';

const Pricing = () => {
    const url = 'http://localhost:3000/pricingplans';
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(url).then(response => {
            setData(response.data);
        });
    }, []);

    return (
        <div className='container my-5  '>
            <div className='d-flex my-5 justify-content-center'>
                <div className="text-center w-50">
                    <h1>Our Pricing Plans</h1>
                    <p>
                        When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.
                    </p>
                </div>
            </div>
            <div className="row column-gap-5 mb-5">
                {data.map((plan) => (
                    <div className={`col ${styles.box}`} key={plan.id}>
                        <div className="pricing-plan">
                            <h1 className='text-dark text-align-center'>${plan.price}  <span className='text-align-center text-primary fs-5'>Per Design</span></h1>
                            <h3>{plan.h1}</h3>

                            <p>{plan.p}</p>
                            <ul>
                                <li>{plan.ul.li}</li>
                                <li>{plan.ul.li1}</li>
                                <li>{plan.ul.li2}</li>
                                <li>{plan.ul.li3}</li>
                                <li>{plan.ul.li4}</li>
                            </ul>
                        </div>
                        <button>Get Started</button>
                    </div>
                ))}
            </div>
            <Frequently />
        </div>
    );
}

export default Pricing;
