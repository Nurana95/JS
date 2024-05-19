// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NavbarLinks } from './links';

import styles from "../NavbarMobile/styles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';


const NavbarMobile = () => {
  const [togglle, setToggle] = useState(false);

  const togglleClick = () => {
    setToggle(!togglle)
  }
  return (
    <div className='d-block '>
      <div className='d-flex'>
        <FontAwesomeIcon onClick={togglleClick} className='text-white fs-1' icon={faBars} />;

        {togglle &&

          <div className=" position-absolute border-1 border-danger end-0 px-5 top-0 bg-dark d-grid ">
            <FontAwesomeIcon onClick={togglleClick} style={{ paddingTop: "20px" }} className='text-white fs-1 ' icon={faX} />;

            {NavbarLinks.map(({ id, title, to }) => {
              return (
                <NavLink
                  key={id}
                  to={to} className="p-2">
                  {title}
                </NavLink>
              );
            })}

            <Link to="/" className={styles.contactBtn}>Contact Us</Link>

          </div>}
      </div>
    </div>
  );
}

export default NavbarMobile;
