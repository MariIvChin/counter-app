import { useState } from "react";

const CountComponent = ({
  // min = Number.MIN_SAFE_INTEGER,
  // max = Number.MAX_SAFE_INTEGER,
  min = -17,
  max = 25,
  initial = 0,
  step = 1,
}) => {
  const [counter, setCounter] = useState(initial);
  const add = () => setCounter((counter) => counter + step);
  const subtract = () => setCounter((counter) => counter - step);
  const setColor = () => {
    if (counter < initial) {
      return "red";
    }
    if (counter <= 10) {
      return "green";
    }
    if (counter <= max) {
      return "yellow";
    }
  };

  return (
    <div className="text-center">
      <h3>
        MIN: {min} {"<<<>>>>"} MAX: {max}
      </h3>

      <button
        disabled={counter === min}
        className="btn btn-warning me-2"
        onClick={subtract}
      >
        -
      </button>
      <button
        disabled={counter === max}
        className="btn btn-success"
        onClick={add}
      >
        +
      </button>
      <h1 style={{ color: setColor() }}>{counter}</h1>
    </div>
  );
};

export default CountComponent;
