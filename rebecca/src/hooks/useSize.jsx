import React, { useEffect } from "react";
import { useRef, useState } from "react";

const useSize = () => {
  const screenWidthOnLoad = useRef([window.innerWidth, window.innerHeight]);
  const [windowSize, setWindowSize] = useState([
    screenWidthOnLoad.current[0],
    screenWidthOnLoad.current[1],
  ]);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);

  return windowSize;
};

export default useSize;
