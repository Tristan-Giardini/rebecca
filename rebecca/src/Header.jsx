import { useState } from "react";
import React from "react";
import HamburgerNav from "./assets/HamburgerNav";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="container header">
      <div className="header-contents">
        <a className="header-link name bold" href="/">
          Rebecca Storm
        </a>
        <button className="hamburger-icon">
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
      </div>
    </div>
  );
};

export default Header;
