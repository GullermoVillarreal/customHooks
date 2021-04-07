import { useState } from "react";

const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  const incremente = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(initialState);
  };
  return {
    counter,
    incremente,
    decrement,
    reset,
  };
};

export default useCounter;
