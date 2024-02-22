import React from "react";

const Header = () => {
  return (
    <div className="container header">
      <div className="header-contents">
        <a className="header-link name bold" href="/">
          Rebecca Storm
        </a>
        <a className="header-link" href="/collection">
          Collection
        </a>
        <a className="header-link" href="/contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
