import { useState, useEffect, useRef } from "react";
import React from "react";
import HamburgerNav from "./assets/HamburgerNav";
import useSize from "./hooks/useSize";
import CloseNav from "./assets/CloseNav";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const screenWidth = useSize();

  console.log(screenWidth[0]);

  const handleOpen = () => {
    setMobileNav(true);
  };

  const handleClose = () => {
    setMobileNav(false);
  };

  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");

    if (mobileNav) {
      wrapper.classList.add("nav-open");
    } else {
      wrapper.classList.remove("nav-open");
    }

    return () => {
      wrapper.classList.remove("nav-open");
    };
  }, [mobileNav]);

  console.log(mobileNav);

  return (
    <div className="container header">
      <div className="header-contents">
        <a className="header-link name bold" href="/">
          Rebecca Storm
        </a>
        {mobileNav ? (
          <button className="close-icon" onClick={handleClose}>
            <CloseNav />
          </button>
        ) : (
          <button className="hamburger-icon" onClick={handleOpen}>
            <HamburgerNav />
          </button>
        )}
        <div className="header-list">
          <a className="header-link" href="/collection/fossil-ephemeral">
            Fossil Ephemeral
          </a>
          <a className="header-link" href="/collection/miscellaneous">
            Miscellaneous
          </a>
          <a className="header-link" href="/collection/commissions">
            Commissions
          </a>
          <div className="mobile-link">
            <a href="/about">About</a>
          </div>
          <a className="header-link" href="/contact">
            Contact
          </a>
        </div>
        {screenWidth[0] < 600 ? (
          <div className={mobileNav ? "mobile-nav open" : "mobile-nav"}>
            <div className="mobile-link">
              <a href="/collection/fossil-ephemeral">Fossil Ephemeral</a>
            </div>
            <div className="mobile-link">
              <a href="/collection/miscellaneous">Miscellaneous</a>
            </div>
            <div className="mobile-link">
              <a href="/collection/commissions">Commissions</a>
            </div>
            <div className="mobile-link">
              <a href="/about">About</a>
            </div>
            <div className="mobile-link">
              <a href="/contact">Contact</a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
