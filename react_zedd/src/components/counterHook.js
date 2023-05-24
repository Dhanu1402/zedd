import React, { useState } from 'react';

export default function CounterHook() {
  const [num, setNum] = useState(0);

  const Increment = () => {
    setNum(num + 5);
  };

  const Decrement = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert('Not Possible');
    }
  };

  return (
    <div className="h-screen relative bg-[#B97B90] grid md:grid-cols-2 grid-rows-2">
      <div className="md:h-screen h-full flex flex-col justify-center items-center">
        <h1 className="absolute left-10 top-10 md:text-4xl text-xl text-white font-semibold font-mono">
          Question 3
        </h1>
        <div className="font-semibold font-mono text-center space-y-4 text-white md:text-2xl">
          <p className="text-white">In this task I have used react hooks.</p>
        </div>
      </div>
      <div className="md:h-screen h-full bg-[#637C6C] space-y-6 flex flex-col justify-center items-center">
        <span className="text-white font-semibold font-mono text-center text-2xl">
          {num}
        </span>
        <div className="flex flex-col space-y-4">
          <button
            onClick={Increment}
            className="border-2 rounded-sm p-2 text-white"
          >
            Increment
          </button>
          <button
            onClick={Decrement}
            className="border-2 rounded-sm p-2 text-white"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
