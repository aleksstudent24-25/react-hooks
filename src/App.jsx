import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  ToggleExample,
  FormExampleIntermediate,
  ArrayExample,
  IntervalExample,
} from "./components/Testing";
import "./App.css";

function App() {
  return (
    <>
      <ToggleExample></ToggleExample>
      <FormExampleIntermediate></FormExampleIntermediate>
      <ArrayExample></ArrayExample>
      <IntervalExample></IntervalExample>
    </>
  );
}

export default App;
