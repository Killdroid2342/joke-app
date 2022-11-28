import Joke from './components/Joke/Joke';
import Selector from './components/Selector/Selector';
import React, { useState } from 'react';
function App() {
  const [genre, setGenre] = useState('Dark');

  return (
    <React.Fragment>
      <h1>Wanna Hear a joke?</h1>
      <Selector genre={genre} setGenre={setGenre} />
      <div>
        <Joke genre={genre} />
      </div>
    </React.Fragment>
  );
}

export default App;
