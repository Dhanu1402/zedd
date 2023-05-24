import { forwardRef } from 'react';

function OnSlideWindow({ text }, ref) {
  return (
    <div className="h-screen bg-[#C48B5B] flex flex-col justify-center items-center">
      <h2
        className="font-semibold font-mono text-center space-y-4 text-white md:text-2xl text-md"
        ref={ref}
      >
        {text}
      </h2>
    </div>
  );
}

export default forwardRef(OnSlideWindow);
