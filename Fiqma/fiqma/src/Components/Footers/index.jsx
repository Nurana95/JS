// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarLinks } from '../Navbar/links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import styles from "../Footers/style.module.css";
import logo from "../../../public/logo.png"


const Footers = () => {
  return (
    <div>
      <div className={`${styles.footer}  `}>
        <div className='container'>
          <div className='d-flex '>
            <div className=' '>
              <img src={logo} alt="" />
              <p className='text-white my-4'>We are always open to discuss your project and improve your online presence.</p>
              <div className={`d-flex ${styles.box}`}>
                <div className=''>
                  <h6>Email me at</h6>
                  <p className='text-secondary'>contact@website.com</p>
                </div>
                <div className=''>
                  <h6>Call us</h6>
                  <p>0927 6277 28525</p>
                </div>
              </div></div>
            <div className='mx-5 w-75 px-5'>
              <h1 className='text-white'>Lets Talk!</h1>
              <p className='text-secondary'>We are always open to discuss your project,<br /> improve your online presence and help with your <br /> UX/UI design challenges.</p>


              <div className='d-flex text-white'>
                <FontAwesomeIcon className='text-white' icon={faFacebookF} />
                <FontAwesomeIcon className="px-3 text-white " icon={faInstagram} />
                <FontAwesomeIcon className='text-white' icon={faTwitter} />
                <FontAwesomeIcon className="px-3 text-white" icon={faLinkedinIn} />

              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='container '>
        <div className='d-flex my-3 justify-content-between align-items-center text-center'>
          <div>
            <h6>Copyright 2021, Finsweet.com</h6>
          </div>
          <div className="d-flex align-items-center ">
            {NavbarLinks.map(({ id, title, to }) => {
              return (
                <NavLink
                  key={id}
                  to={to} className="p-2 text-dark">
                  {title}
                </NavLink>
              );
            })}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Footers;
