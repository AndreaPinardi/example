import { useRef, useState } from "react";

export function Counter1() {
  const [counter, setCounter] = useState(5);

  return (
    <>
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter(counter + 5);
          setCounter(counter + 5);
          alert(counter);
          setCounter(counter + 5);
          setCounter(counter + 5);
        }}
      >
        Increment
      </button>
    </>
  );
}

export function Counter2() {
  const [counter, setCounter] = useState(5);

  return (
    <>
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter((counter) => counter + 5);
          setCounter((counter) => counter + 5);
          alert(counter);
          setCounter((counter) => counter + 5);
          setCounter((counter) => counter + 5);
        }}
      >
        Increment
      </button>
    </>
  );
}

export function Counter3() {
  const countRef = useRef(0);

  function handleIncrement() {
    countRef.current = countRef.current + 1;
  }

  return (
    <>
      <span>Count: {countRef.current}</span>
      <button onClick={handleIncrement}>Click me</button>
    </>
  );
}
