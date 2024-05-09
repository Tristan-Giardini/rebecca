import React from "react";
import Fancybox from "./Fancybox";
import UpArrow from "./assets/UpArrow";

const Collection = ({ collections, exhibitionText }) => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="collection-wrapper">
      <Fancybox
        options={{
          Carousel: {
            infinite: true,
            defaultDisplay: "flex",
            wheel: false,
            modal: false,
            closeButton: true,
          },
        }}
      >
        {collections.map((collection, index) => {
          return (
            <a
              index={index}
              data-fancybox="gallery"
              data-caption={collection.caption}
              href={collection.painting}
            >
              <img
                loading="lazy"
                alt="painting title"
                className={collection.className}
                src={collection.painting}
              />
            </a>
          );
        })}
      </Fancybox>
      {exhibitionText ? (
        <div className="exhibition-text">
          <p>{exhibitionText.pOne}</p>
          <p>{exhibitionText.pTwo}</p>
          <p>{exhibitionText.pThree}</p>
          <p>{exhibitionText.pFour}</p>
        </div>
      ) : (
        ""
      )}
      <div className="scroll-to-top" onClick={handleScroll}>
        <UpArrow />
      </div>
    </div>
  );
};
export default Collection;
