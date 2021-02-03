import { useState, useEffect } from "react";

const useElementSize = (element) => {
  const [elementSize, setElementSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      if (element && element.current) {
        setElementSize({
          width: element.current.getBoundingClientRect().width,
          height: element.current.getBoundingClientRect().height,
        });
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [element]);

  return elementSize;
};

export default useElementSize;
