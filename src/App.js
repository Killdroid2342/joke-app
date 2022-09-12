import './App.css';
import Joke from './components/Joke/Joke';
import Selector from './components/Selector/Selector';
import { useState } from 'react';
function App() {
  const [genre, setGenre] = useState('Dark');
  return (
    <div>
      <h1>Wanna Hear a joke?</h1>
      <Selector genre={genre} setGenre={setGenre} />
      <Joke genre={genre} />
    </div>
  );
}

export default App;
