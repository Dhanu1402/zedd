import { useRef } from 'react';
import OnSlideWindow from './onSlideWindow';

export default function MainWindow() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="h-screen relative bg-[#2C5448] flex flex-col justify-center items-center space-y-10">
        <h1 className="absolute left-10 top-10 md:text-4xl text-xl text-white font-semibold font-mono">
          Question 4
        </h1>
        <p className="font-semibold font-mono text-center space-y-4 text-white md:text-2xl text-md">
          In this task I have used useRef hook to scroll to another div This is
          the Primary div which has button which onclick slides to another div
        </p>
        <button
          onClick={handleClick}
          className="border-2 rounded-md p-2 text-white"
        >
          scroll to div
        </button>
      </div>
      <OnSlideWindow ref={ref} text="Screen is scrolled to this component." />
    </div>
  );
}
