// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from 'axios'
import BannerFeatures from "../../../Components/BannerFeatures";

// eslint-disable-next-line no-unused-vars
import styles from "../Features/styles.module.css";

const Features = () => {
    const url = "http://localhost:3000/posts";
    const [data, setData] = useState([]);

    useEffect(() => {
        axios(url).then(({ data }) => {
            setData(data);
        });
    }, []);

    return (
        <div className={`${styles.bgGrey}`}>
            <div className="container container-lg container-sm container-md text-lg-center">
                <div className={`${styles.features}`}>
                    <p className="text-dark">Features</p>
                    <h1>Design that solves problems, one product at a time</h1>
                </div>

                <div className={`row row-gap-4 column-gap-md-4 justify-content-between `}>

                    {data.map((item, id) => (
                        <BannerFeatures
                            key={id}
                            h1={item.h1}
                            h6={item.h6}
                            p={item.p}
                            icon={item.icon}
                            index={id}


                        />
                    ))}
                </div>
            </div >
        </div>

    );
};

export default Features;
