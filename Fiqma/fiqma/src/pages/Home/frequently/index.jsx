// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

const Frequently = () => {
    const url = "http://localhost:3000/questions";
    const [data, setData] = useState([]);
    const [openItems, setOpenItems] = useState([]);

    useEffect(() => {
        axios(url).then(({ data }) => {
            setData(data);
        });
    }, []);

    useEffect(() => {

        if (data.length > 0) {
            setOpenItems([data[0].id]);
        }
    }, [data]);

    const toggleOpen = (id) => {
        setOpenItems(prevOpenItems => {
            if (prevOpenItems.includes(id)) {
                return prevOpenItems.filter(item => item !== id);
            } else {
                return [...prevOpenItems, id];
            }
        });
    };

    return (
        <div className="container">
            <div className="row  ">
                <div className="col-sm-12  col-lg-4 my-sm-4   ">
                    <h1>Frequently asked questions</h1>
                    <button className="text-primary">Contact us for more info</button>
                </div>
                <div className="col-sm-12  col-lg-8 ">
                    <div>
                        {data.map((item) => (
                            <div key={item.id} className="row">
                                <span className=" text-primary col-1 fs-3 ">{item.id}</span>
                                <div className="col-11" >

                                    <h3 className="d-flex justify-content-between">{item.sual}
                                        <span className="text-muted" onClick={() => toggleOpen(item.id)}>
                                            {openItems.includes(item.id) ? "-" : "+"}
                                        </span>
                                    </h3>
                                    {openItems.includes(item.id) && <div><p >{item.cavab}</p></div>}

                                </div>


                                <hr />

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frequently;
