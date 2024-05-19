// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../BannerAbout/style.module.css";

// eslint-disable-next-line react/prop-types
const BannerAbout = ({ id, h6, h1, p, img }) => {
  // Преобразуем id в число
  const itemId = parseInt(id);

  return (
    <div>
      <div key={itemId} className={`row pb-5`}>
   
        {itemId % 2 === 1 ? (
          <>
            <div className="col-6">
              <img className={`w-100 object-fit-cover ${styles.box}`} src={img} alt="" />
            </div>
            <div className="col-6 pe-5">
              <h6>{h6}</h6>
              <h1>{h1}</h1>
              <p>{p}</p>
            </div>
          </>
        ) : (
          <>
            <div className="col-6 pe-5">
              <h6>{h6}</h6>
              <h1>{h1}</h1>
              <p>{p}</p>
            </div>
            <div className="col-6">
              <img className={`w-100 object-fit-cover ${styles.box}`} src={img} alt="" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BannerAbout;
