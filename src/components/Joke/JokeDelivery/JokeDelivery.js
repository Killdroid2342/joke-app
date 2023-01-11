import React from 'react';

const JokeDelivery = ({ savedJokes }) => {
  return (
    <div>
      <p className='text-3xl mt-5 mb-5 font-bold'>Saved Jokes</p>
      {savedJokes?.map((savedJoke, idx) => {
        return (
          <div key={idx}>
            {savedJoke.type === 'single' ? (
              <li>{savedJoke.joke}</li>
            ) : (
              <div className='border-2 border-white p-5 rounded-lg mb-5'>
                <li className='list-none'>{savedJoke.setup}</li>
                <li className='list-none'>{savedJoke.delivery}</li>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default JokeDelivery;
