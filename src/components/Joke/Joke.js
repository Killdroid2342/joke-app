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
    <Fragment>
      <div className='border border-white'>
        <ul>
          {joke && (
            <div>
              {joke.type === 'single' ? (
                <li className='text'>{joke.joke}</li>
              ) : (
                <div>
                  <li className='text'>{joke.setup}</li>
                  <li className='text'>{joke.delivery}</li>
                </div>
              )}
            </div>
          )}
        </ul>
        <div className='flex flex-col'>
          <button
            className='btn border border-red-700 h-8 w-32 pt-5 pb-16 cursor-pointer font-bold text-white ml-8 mt-12'
            onClick={() => {
              setCount(count + 1);
              call();
            }}
          >
            Click For New Joke
          </button>
          <button
            className='pt-2 pb-2 w-48 ml-4 mt-5 text-white border-2 border-blue-900'
            onClick={saveJoke}
          >
            Save current Joke
          </button>
        </div>
      </div>
      <div className='border border-blue-900 w-80 h-auto ml-[18%]'>
        <p className='text-2xl text-center'>All The Jokes Rendered</p>
        <p className='border border-green-700 w-12 h-5 text-center pt-5 pb-10 ml-[43%]'>
          {count}
        </p>
      </div>
      <div className='border border-blue-900 w-80 h-auto ml-[18%]'>
        <p className='text-2xl text-center mb-5'>Saved Jokes</p>
        <div className='border border-red-700'>
          {savedJokes?.map((savedJoke, idx) => {
            return (
              <div key={idx}>
                {savedJoke.type === 'single' ? (
                  <li className='text'>{savedJoke.joke}</li>
                ) : (
                  <div>
                    <li className='text'>{savedJoke.setup}</li>
                    <li className='text'>{savedJoke.delivery}</li>
                  </div>
                )}
              </div>
            );
          })}
          <li className='text'></li>
        </div>
      </div>
    </Fragment>
  );
};

export default Joke;
