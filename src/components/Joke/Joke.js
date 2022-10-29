import React, { useState, Fragment } from 'react';
import './Data.css';
import useDynamicState from '../util/useLocalStorage';

const Joke = ({ genre }) => {
  // let API_Dark = 'https://v2.jokeapi.dev/joke/Dark';
  // let Value = API_Dark;
  const [joke, setJoke] = useState(null);
  const [savedJokes, setSavedJokes] = useDynamicState([], 'saved-jokes');

  const saveJoke = () => {
    setSavedJokes([...savedJokes, joke]);
    // console.log(savedJokes);
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
      <div className='out-input'>
        <div className='main-joke'>
          <ul>
            {joke && (
              <div>
                {joke.type === 'single' ? (
                  <li className='Text'>{joke.joke}</li>
                ) : (
                  <div>
                    <li className='Text'>{joke.setup}</li>
                    <li className='Text'>{joke.delivery}</li>
                  </div>
                )}
              </div>
            )}
          </ul>
          <div className='outside-btn'>
            <button
              className='btn'
              onClick={() => {
                setCount(count + 1);
                // console.log(count);
                call();
              }}
            >
              Click For New Joke
            </button>
            <button className='saveJoke' onClick={saveJoke}>
              Save current Joke
            </button>
          </div>
        </div>
      </div>
      <div className='Count'>
        <p className='head'>All The Jokes Rendered</p>
        <p className='Numb'>{count}</p>
      </div>
      <div className='Count'>
        <p className='head'>Saved Jokes</p>
        <div className='savedJokes1'>
          {/* {console.log(savedJokes)} */}
          {savedJokes?.map((savedJoke, idx) => {
            return (
              <div key={idx}>
                {savedJoke.type === 'single' ? (
                  <li className='Text'>{savedJoke.joke}</li>
                ) : (
                  <div>
                    <li className='Text'>{savedJoke.setup}</li>
                    <li className='Text'>{savedJoke.delivery}</li>
                  </div>
                )}
              </div>
            );
          })}
          <li className='Text'></li>
        </div>
      </div>
    </Fragment>
  );
};

export default Joke;
