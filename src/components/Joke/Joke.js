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
      <div>
        <ul>
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
        <div>
          <button
            onClick={() => {
              setCount(count + 1);
              call();
            }}
          >
            Click For New Joke
          </button>
          <button onClick={saveJoke}>Save current Joke</button>
        </div>
      </div>
      <div>
        <p>All The Jokes Rendered</p>
        <p>{count}</p>
      </div>
      <div>
        <p>Saved Jokes</p>
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
          <li></li>
        </div>
      </div>
    </Fragment>
  );
};

export default Joke;
