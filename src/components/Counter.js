import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = (cmd) => {
    if (cmd === "dec") {
      // if (count === 0) return;
      setCount((prev) => prev - 1);
    } else if (cmd === "inc") {
      setCount((prev) => prev + 1);
    }
  };
  return (
    <div>
      <h1 data-testid="counter-name" className="text-center mb-3">
        Counter App
      </h1>
      <div className="inline-flex items-center w-full justify-center gap-3">
        <button
          data-testid="decCount"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleClick("dec")}
        >
          -
        </button>
        <div
          data-testid="count"
          className="bg-gray-200 px-2 py-1 rounded text-lg"
        >
          {count}
        </div>
        <button
          data-testid="incCount"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleClick("inc")}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
