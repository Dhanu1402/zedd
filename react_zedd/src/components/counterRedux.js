import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Increment, Decrement } from '../redux/counterAction';

export default function CounterRedux() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  return (
    <div className="h-screen relative bg-[#C49BF8] grid md:grid-cols-2 grid-rows-2">
      <div className="md:h-screen h-full flex flex-col justify-center items-center">
        <h1 className="absolute left-10 top-10 md:text-4xl text-xl text-white font-semibold font-mono">
          Question 2
        </h1>
        <div className="font-semibold font-mono text-center space-y-4 text-white md:text-2xl">
          <p className="text-[#FF0000]">
            The value of count is being stored in Redux store.
          </p>
        </div>
      </div>
      <div className="md:h-screen h-full bg-[#7E91C0] space-y-6 flex flex-col justify-center items-center">
        <span className="text-white font-semibold font-mono text-center text-2xl">
          Count: {counter}
        </span>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => dispatch(Increment())}
            className="border-2 rounded-sm p-2 text-white"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(Decrement())}
            className="border-2 rounded-sm p-2 text-white"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
