import { useState, useEffect } from "react";
import React from "react";
import HamburgerNav from "./assets/HamburgerNav";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const handleClick = () => {
    // console.log("click");
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    // const mobile = document.querySelector(".mobile-nav")
    if (mobileNav) {
      wrapper.classList.add("nav-open");
    } else {
      wrapper.classList.remove("nav-open");
    }

    return () => {
      wrapper.classList.remove("nav-open");
    };
  }, [mobileNav]);

  // console.log(mobileNav);

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
        <div className={mobileNav ? "mobile-nav open" : "mobile-nav"}>
          <a className="mobile-link" href="/collection">
            Collection
          </a>
          <a className="mobile-link" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
