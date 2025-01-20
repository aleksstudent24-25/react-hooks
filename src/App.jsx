import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  ToggleExample,
  FormExampleIntermediate,
  ArrayExample,
  IntervalExample,
  WindowSizeExample,
  FetchExample,
} from "./components/Testing";
import "./App.css";

function App() {
  return (
    <>
      <ToggleExample></ToggleExample>
      <FormExampleIntermediate></FormExampleIntermediate>
      <ArrayExample></ArrayExample>
      <IntervalExample></IntervalExample>
      <WindowSizeExample></WindowSizeExample>
      <FetchExample></FetchExample>
    </>
  );
}

export default App;
