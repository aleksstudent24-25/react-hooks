import { useState } from "react";

export default function useFormInput(initialValue) {
  const [value, updateInput] = useState(initialValue);

  //   function onChange(event) {
  //     console.log(event);
  //     updateInput(() => event.target.value);
  //   }

  //   function reset() {
  //     updateInput(() => "");
  //   }

  const onChange = (event) => {
    console.log("Update");
    updateInput(event.target.value);
  };

  const reset = () => {
    console.log("Reset");
    updateInput(initialValue);
  };

  return { value, onChange, reset };
}
