// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NavbarLinks } from './links';
import logo from "/logo.png";
import style from "../Navbar/styles.module.css"
import NavbarMobile from '../NavbarMobile';
import MediaQuery from 'react-responsive';

const Navbar = () => {

  return (
    <div className={style.navbar}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Link>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <MediaQuery query="(max-device-width: 768px)">
            <NavbarMobile />
          </MediaQuery>
          <MediaQuery className='d-none' query="(min-width: 800px)">

            <div className={`d-flex  align-items-center  `}  >
              {NavbarLinks.map(({ id, title, to }) => {
                return (
                  <NavLink
                    key={id}
                    to={to}
                    className={`p-2`}
                  >
                    {title}
                  </NavLink>
                );
              })}

              <Link to="/contact" className={style.contactBtn}>Contact Us</Link>

            </div>


          </MediaQuery>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
