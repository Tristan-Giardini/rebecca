import React from "react";
import exhibitionviews from "./assets/exhibitionviewsjpg.jpg";

const Homepage = () => {
  return (
    <div className="container homepage">
      <>
        <img
          src={exhibitionviews}
          loading="lazy"
          alt="exhibition"
          className="homepage-pic"
        />
      </>
    </div>
  );
};

export default Homepage;
