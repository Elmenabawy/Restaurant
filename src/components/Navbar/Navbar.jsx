import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return(
    <nav className="app__navbar">
    <div className="app__navbar__logo">
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className="app__navbar__links">
      <li className="p__opensans">
        <a href="#home">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#about">About</a>
      </li>
      <li className="p__opensans">
        <a href="#menu">Menu</a>
      </li>
      <li className="p__opensans">
        <a href="#awards">Awards</a>
      </li>
      <li className="p__opensans">
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className="app__navbar__login">
      <a href="login" className="p__opensans">
        Login / Register
      </a>
      <div />
      <a href="/" className="p__opensans">
        Book Table
      </a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {setToggleMenu(true)}} className="app__navbar-smallscreen-toggle-icon"/>
      {toggleMenu && (
          <div className="app__navbar__smallscreen-overlay flex-center slide-bottom ">
          <MdOutlineRestaurantMenu
            color="#fff"
            fontSize={27}
            onClick={() => {setToggleMenu(false)}}
            className="overlay-close"
          />
          <ul className="app__navbar-smallscreen_links">
            <li className="p__opensans">
              <a href="#home">Home</a>
            </li>
            <li className="p__opensans">
              <a href="#about">About</a>
            </li>
            <li className="p__opensans">
              <a href="#menu">Menu</a>
            </li>
            <li className="p__opensans">
              <a href="#awards">Awards</a>
            </li>
            <li className="p__opensans">
              <a href="#contact">Contact</a>
            </li>
          </ul>
      </div>
      )}

      
      
    </div>
  </nav>
  )

};

export default Navbar;
