import useToggle from "./use-functions/Toggle";
import useFormInput from "./use-functions/FormInput";
import useArray from "./use-functions/Array";
import useTimer from "./use-functions/Timer";

export function ToggleExample() {
  const [isVisible, toggleIsVisible] = useToggle();

  return (
    <div>
      <button onClick={toggleIsVisible}>Toggle Visibility</button>
      {isVisible && <p>Now you see me!</p>}
    </div>
  );
}

export function FormExampleIntermediate() {
  const {
    value: name,
    onChange: onNameChange,
    reset: nameReset,
  } = useFormInput("");
  const {
    value: email,
    onChange: onEmailChange,
    reset: emailReset,
  } = useFormInput("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Navn:", name, "E-post:", email);
    nameReset();
    emailReset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Navn:
        <input value={name} onChange={onNameChange} />
      </label>
      <label>
        E-post:
        <input value={email} onChange={onEmailChange} />
      </label>
      <button type="submit">Send inn</button>
    </form>
  );
}

export function ArrayExample() {
  const { array, push, removeByIndex, clear } = useArray(["Apple", "Banana"]);

  return (
    <div>
      <h3>Fruits:</h3>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeByIndex(index)}>Fjern</button>
          </li>
        ))}
      </ul>
      <button onClick={() => push("Orange")}>Add Orange</button>
      <button onClick={clear}>Empty List</button>
    </div>
  );
}

export function IntervalExample() {
  const { time, pause, reset } = useTimer();

  return (
    <div>
      <p>
        {Math.floor(time / (60 * 60))} Hours {Math.floor(time / 60)} Minutes{" "}
        {time} Seconds
      </p>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
