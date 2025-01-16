import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      window.addEventListener("resize", resize, false);
    };
  });

  return { dimensions };
}
