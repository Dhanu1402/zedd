import React from 'react';
import Parent from './parent';
import { useState } from 'react';

export default function Child() {
  const [data, setData] = useState('');

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div className="h-screen relative grid md:grid-cols-2 grid-rows-2">
      <div className="md:h-screen bg-[#96BEA4] flex flex-col justify-center items-center">
        <h1 className="absolute left-10 top-10 md:text-4xl text-xl font-semibold font-mono">
          Question 5
        </h1>
        <div className="font-semibold font-mono text-center space-y-4 md:text-2xl">
          <p className="">
            I am sending input data from child component into parent component
            by using state variable
          </p>
        </div>
      </div>
      <div className="md:h-screen grid grid-rows-2">
        <div className="bg-[#96BEA4] flex justify-center items-center text-center">
          <Parent data={data} />
        </div>
        <div className="bg-[#ED806E] flex flex-col justify-center items-center text-center space-y-4">
          <div className="font-semibold font-mono text-center space-y-2 md:text-2xl">
            <p>This is Child Component.</p>
            <p>Enter Name:</p>
          </div>
          <input
            type="text"
            id="data"
            name="data"
            onChange={handleChange}
            value={data}
            autoComplete="off"
            className="rounded-sm border-2 border-black p-2 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
