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
    <div className="collection-wrapper">
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
            <a
              index={index}
              data-fancybox="gallery"
              data-caption={handleCaption(index)}
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
      <div className="scroll-to-top">
        <p onClick={handleScroll}>Scroll to top</p>
      </div>
    </div>
  );
};
export default Collection;
