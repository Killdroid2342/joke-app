import React, { useState } from 'react';
import useDynamicState from '../util/useLocalStorage';
import JokeClick from './JokeClick/JokeClick';
import JokeSetup from './JokeSetup/JokeSetup';
import JokeDelivery from './JokeDelivery/JokeDelivery';

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
      <JokeSetup joke={joke} />
      <JokeClick
        setCount={setCount}
        count={count}
        call={call}
        saveJoke={saveJoke}
      />
      <JokeDelivery savedJokes={savedJokes} />
    </div>
  );
};

export default Joke;
