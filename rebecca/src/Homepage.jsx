import React from "react";
import exhibitionviews from "./assets/exhibitionviews.jpg";

const Homepage = () => {
  return (
    <div className="container homepage">
      <>
        <img src={exhibitionviews} alt="exhibition" className="homepage-pic" />
      </>
    </div>
  );
};

export default Homepage;
