import { useState, useEffect } from "react";

const useMediaScreen = (width) => {
  const [windowSize, setWindowSize] = useState({
    width: window?.innerWidth,
    height: window?.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      });
    };

    window?.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize.width <= width;
};

export default useMediaScreen;
