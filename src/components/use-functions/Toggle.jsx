import { useState } from "react";

export default function useToggle(initialValue = false) {
  const [isActive, changeValue] = useState(initialValue);

  const toggle = () => changeValue((prev) => !prev);

  return [isActive, toggle];
}
