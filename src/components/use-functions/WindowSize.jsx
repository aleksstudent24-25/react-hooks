import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("load", resize, false);
    window.addEventListener("resize", resize, false);
  }, [width, height]);

  return { width, height };
}
