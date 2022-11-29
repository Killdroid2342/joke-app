import React, { useState, Fragment } from 'react';
import useDynamicState from '../util/useLocalStorage';

const Joke = ({ genre }) => {
  const [joke, setJoke] = useState(null);
  const [savedJokes, setSavedJokes] = useDynamicState([], 'saved-jokes');

  const saveJoke = () => {
    setSavedJokes([...savedJokes, joke]);
  };

  const API = () => {
    let API_URL = `https://v2.jokeapi.dev/joke/${genre}`;
    fetch(API_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setJoke(data);
      });
  };

  const call = () => {
    API();
  };

  // counter

  const [count, setCount] = useDynamicState(0, 'count');

  return (
    <div className='border-2 border-white rounded-md flex flex-col items-center justify-center text-center'>
      <div className=' border-2 border-white w-56 rounded-xl mt-5 p-5'>
        <p className='mb-2 text-xl font-bold'>All The Jokes Rendered</p>
        <p className='text-xl font-bold'>{count}</p>
      </div>
      <ul className='border-2 border-white w-56 rounded-xl mt-5'>
        {joke && (
          <div>
            {joke.type === 'single' ? (
              <li>{joke.joke}</li>
            ) : (
              <div>
                <li>{joke.setup}</li>
                <li>{joke.delivery}</li>
              </div>
            )}
          </div>
        )}
      </ul>
      <div className='flex flex-col'>
        <button
          onClick={() => {
            setCount(count + 1);
            call();
          }}
          className='border-2 border-white p-3 mt-5 rounded-xl'
        >
          Click For New Joke
        </button>
        <button
          onClick={saveJoke}
          className='border-2 border-white p-3 mt-5 rounded-xl'
        >
          Save current Joke
        </button>
      </div>
      <div>
        <p className='text-2xl mt-3 font-bold'>Saved Jokes</p>
        <div>
          {savedJokes?.map((savedJoke, idx) => {
            return (
              <div key={idx}>
                {savedJoke.type === 'single' ? (
                  <li>{savedJoke.joke}</li>
                ) : (
                  <div>
                    <li>{savedJoke.setup}</li>
                    <li>{savedJoke.delivery}</li>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Joke;
