import React from "react";
import Collections from "./assets/collection-data";
import Fancybox from "./Fancybox";

const Collection = () => {
  console.log(Collections);

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
        {Collections.map((collection) => {
          return (
            // <div className="collections">
            <a data-fancybox="gallery" href={collection.painting}>
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
