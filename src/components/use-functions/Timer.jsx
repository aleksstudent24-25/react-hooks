import { useEffect, useState } from "react";
export default function useTimer() {
  const [time, setTime] = useState(0);
  const [isPaused, setPause] = useState(false);

  let intervalid;
  useEffect(() => {
    intervalid = setInterval(() => {
      console.log(isPaused);
      if (!isPaused) setTime((time) => time + 1);
    }, 1000);
    return () => {
      clearInterval(intervalid);
    };
  }, []);

  const pause = () => {
    setPause((prev) => !prev);
  };

  const reset = () => {
    setTime(0);
  };

  return { time, pause, reset };
}
