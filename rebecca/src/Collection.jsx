import React from "react";
import Collections from "./assets/collection-data";
import Fancybox from "./Fancybox";

const Collection = () => {
  console.log(Collections);

  const handleCaption = (index) => {
    if (index === 1) {
      return "This is my title This is my medium This is my year";
    }
  };

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
                className={collection.className}
                src={collection.painting}
              />
            </a>
            // </div>
          );
        })}
      </Fancybox>
      <div className="scroll-to-top" onClick={handleScroll}>
        Scroll to top
      </div>
    </>
  );
};
export default Collection;
