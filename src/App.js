import Joke from './components/Joke/Joke';
import Selector from './components/Selector/Selector';
import React, { useState } from 'react';
function App() {
  const [genre, setGenre] = useState('Dark');
  document.title = 'Joke Website';
  return (
    <React.Fragment>
      <h1 className='text-center text-3xl font-bold text-white mt-8'>
        Wanna Hear A Joke?
      </h1>
      <Selector genre={genre} setGenre={setGenre} />
      <div>
        <Joke genre={genre} />
      </div>
    </React.Fragment>
  );
}

export default App;
