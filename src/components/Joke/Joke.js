import React, { useState } from 'react';
import './Data.css';

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
        // console.log(data);
        setJokes([data]);
      });
  };

  const call = () => {
    API();
  };

  return (
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
          <button className='btn' onClick={call}>
            Click For New Joke
          </button>
        </div>
      </div>
    </div>
  );
};

export default Joke;
