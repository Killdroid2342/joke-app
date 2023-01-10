import React from 'react';

const JokeSetup = ({ joke }) => {
  return (
    <div>
      <ul className='border-2 border-white w-56 rounded-xl mt-5'>
        {joke && (
          <div className='p-5'>
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
    </div>
  );
};

export default JokeSetup;
