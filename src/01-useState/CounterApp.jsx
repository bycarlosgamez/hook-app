import { useState } from 'react';

const CounterApp = () => {
  const [{ count1, count2, count3 }, setCount] = useState({
    count1: 10,
    count2: 20,
    count3: 30,
  });

  const handleClick = () =>
    setCount((prevCount) => ({ ...prevCount, count1: count1 + 1 }));

  return (
    <div className='w-1/4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto mt-5'>
      <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        Counter: {count1}
      </h2>
      <hr />
      <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        Counter: {count2}
      </h2>
      <hr />
      <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        Counter: {count3}
      </h2>
      <hr />
      <button
        onClick={handleClick}
        type='button'
        className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold mt-4 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full'
      >
        +1
      </button>
    </div>
  );
};

export default CounterApp;
