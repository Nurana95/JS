// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
const BannerFeatures = ({ h1, p, index }) => {
  return (
    <div className={`col-12 col-md-12 col-lg-3 bg-white ${index === 1 || index === 4 ? `` : ""}`}>
      <div className=" p-4  ">
        <FontAwesomeIcon icon={faUsers} />
        <h4>{h1}</h4>
        <p>{p}</p>
      </div>
    </div>
  );
};

export default BannerFeatures;
