import { useState, useEffect, useRef } from "react";
import React from "react";
import HamburgerNav from "./assets/HamburgerNav";
import useSize from "./hooks/useSize";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const screenWidth = useSize();

  console.log(screenWidth[0]);

  const handleClick = () => {
    setMobileNav(!mobileNav);
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

  return (
    <div className="container header">
      <div className="header-contents">
        <a className="header-link name bold" href="/">
          Rebecca Storm
        </a>
        <button className="hamburger-icon" onClick={handleClick}>
          <HamburgerNav />
        </button>
        <div className="header-list">
          <a className="header-link" href="/collection">
            Collection
          </a>
          <a className="header-link" href="/contact">
            Contact
          </a>
        </div>
        {screenWidth[0] < 600 ? (
          <div className={mobileNav ? "mobile-nav open" : "mobile-nav"}>
            <div className="mobile-link">
              <a href="/collection">Collection</a>
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
