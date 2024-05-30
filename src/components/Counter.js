import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const AddHandler = () => {
    setCounter(counter + 1);
  };

  const DeductHandler = () => {
    setCounter(counter - 1);
  };

  const ResetHandler = () => {
    setCounter(0);
  };

  const colorAnimation = useSpring({
    backgroundColor: `rgba(54, 182, 238, ${Math.min(counter / 10, 1)})`,
    config: {
      duration: 500,
      easing: t => t * t * (3 - 2 * t),
    },
  });

  return (
    <animated.div className="font-inter"
      style={{
        ...colorAnimation,
        margin: '20px',
        width: '60%',
        padding: '5em',
        borderRadius: '8px',
        border: '1px solid #1B3D58',
        boxShadow: '0px 4px 6px #F472B6',
      }}
    >
      <p
        className="border-[#36B6EE] text-gray-50 border-l border-r border-t border-b rounded-lg p-3 text-center font-bold text-xl bg-[#1E293B]"
      >
        {counter}
      </p>
      <h1 className="m-2 font-semibold text-center text-gray-50 text-2xl">Counter</h1>
      <div className="flex gap-2">
        <button
          onClick={AddHandler}
          className="rounded-md bg-gray-800 text-gray-50 border-[#1B3D58] border-l border-r border-b border-t w-[20%] p-3 hover:bg-[#36B6EE] duration-500"
        >
          +
        </button>
        <button
          onClick={ResetHandler}
          className="rounded-md bg-gray-800 text-gray-50 border-[#1B3D58] border-l border-r border-b border-t w-[60%] p-3 hover:bg-[#36B6EE] duration-500"
        >
          <h2>Reset</h2>
        </button>
        <button
          onClick={DeductHandler}
          className="rounded-md bg-gray-800 text-gray-50 border-[#1B3D58] border-l border-r border-b border-t w-[20%] p-3 hover:bg-[#36B6EE] duration-500"
        >
          -
        </button>
      </div>
    </animated.div>
  );
};

export default Counter;
