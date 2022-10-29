import Joke from './components/Joke/Joke';
import Selector from './components/Selector/Selector';
import React, { useState } from 'react';
function App() {
  const [genre, setGenre] = useState('Dark');

  return (
    <React.Fragment>
      <h1 className='text-center text-3xl font-bold mt-10'>
        Wanna Hear a joke?
      </h1>
      <Selector genre={genre} setGenre={setGenre} />
      <div className='border border-red-800 flex flex-row'>
        <Joke genre={genre} />
      </div>
    </React.Fragment>
  );
}

export default App;
