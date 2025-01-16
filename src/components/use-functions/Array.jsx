import { useState } from "react";

export default function useArray(initialArray) {
  const [array, alterArray] = useState(initialArray);

  function push(item) {
    alterArray([...array, item]);
  }

  function removeByIndex(i) {
    // const newArray = [...array.slice(0, i), ...array.slice(i + 1)];
    const newArray = array.filter((item, index) => index !== i);
    alterArray(newArray);
  }

  const clear = () => {
    alterArray([]);
  };

  return { array, push, removeByIndex, clear };
}
