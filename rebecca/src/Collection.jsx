import React from "react";
import Collections from "./assets/collection-data";
import Fancybox from "./Fancybox";

const Collection = () => {
  console.log(Collections);

  const handleCaption = (index) => {
    if (index === 1) {
      return "";
    }
  };

  return (
    <>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
            defaultDisplay: "flex",
            wheel: false,
          },
        }}
      >
        {Collections.map((collection, index) => {
          return (
            // <div className="collections">
            <a
              index={index}
              data-fancybox="gallery"
              data-caption={handleCaption(index)}
              href={collection.painting}
            >
              <img
                alt="painting title"
                className="painting"
                src={collection.painting}
              />
            </a>
            // </div>
          );
        })}
      </Fancybox>
    </>
  );
};
export default Collection;
