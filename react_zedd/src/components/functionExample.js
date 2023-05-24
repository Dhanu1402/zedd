import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function FunctionExample() {
  const counter = useSelector((state) => state.counter);

  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };

  return (
    <div className="md:h-screen h-full bg-[#96BEA4] space-y-6 flex flex-col justify-center items-center">
      <div className="font-semibold font-mono text-center space-y-4 text-white md:text-2xl">
        <h>This is from Functional Component.</h>
        <p>The value of count from question 2 part is</p>
        <span className="text-[#0000FF]">{counter}</span>
        <p>fetched from redux store</p>
        <p className="text-[#FF0000]">Use of Hooks in Functional Component</p>
      </div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        placeholder="Enter text here"
        value={message}
        className="rounded-sm border-2 border-black p-2 outline-none"
      />
      <div className="text-2l font-semibold font-mono text-center text-white space-y-4">
        <h2>{message}</h2>
      </div>
    </div>
  );
}
