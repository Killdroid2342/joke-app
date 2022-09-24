import React, { useState, Fragment } from 'react';
import './Data.css';
import useDynamicState from '../util/useLocalStorage';

const Joke = ({ genre }) => {
  // let API_Dark = 'https://v2.jokeapi.dev/joke/Dark';
  // let Value = API_Dark;
  const [jokes, setJokes] = useState([]);

  const API = () => {
    let API_URL = `https://v2.jokeapi.dev/joke/${genre}`;
    fetch(API_URL)
      .then((res) => {
        // console.log('asdasd');
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setJokes([data]);
      });
  };

  const call = () => {
    API();
  };

  // counter

  const [count, setCount] = useDynamicState(0, 'count');

  //saving jokes

  return (
    <Fragment>
      <div className='out-input'>
        <div className='main-joke'>
          <ul>
            {jokes.map((data) => {
              return (
                <div key={data.id}>
                  {data.type === 'single' ? (
                    <li className='Text'>{data.joke}</li>
                  ) : (
                    <div>
                      <li className='Text'>{data.setup}</li>
                      <li className='Text'>{data.delivery}</li>
                    </div>
                  )}
                </div>
              );
            })}
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
            <button className='saveJoke'>Save current Joke</button>
          </div>
        </div>
      </div>
      <div className='Count'>
        <p className='head'>All The Jokes Rendered</p>
        <p className='Numb'>{count}</p>
      </div>
      <div className='Count'>
        <p className='head'> Saved Jokes</p>
        <div className='savedJokes'>
          <li className='Text'>lorem</li>
        </div>
      </div>
    </Fragment>
  );
};

export default Joke;
