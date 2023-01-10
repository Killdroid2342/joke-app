import React from 'react';

const JokeClick = ({ setCount, count, call, saveJoke }) => {
  return (
    <div className='flex flex-col'>
      <button
        onClick={() => {
          setCount(count + 1);
          call();
        }}
        className='border-2 border-white p-3 mt-5 rounded-xl font-bold'
      >
        Click For New Joke
      </button>
      <button
        onClick={saveJoke}
        className='border-2 border-white p-3 mt-5 rounded-xl font-bold'
      >
        Save current Joke
      </button>
    </div>
  );
};

export default JokeClick;
