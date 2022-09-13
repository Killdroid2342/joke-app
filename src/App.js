import './App.css';
import Joke from './components/Joke/Joke';
import Selector from './components/Selector/Selector';
import Counter from './components/Counter/Counter';
import { useState } from 'react';
function App() {
  const [genre, setGenre] = useState('Dark');
  return (
    <div className='main-app'>
      <h1>Wanna Hear a joke?</h1>
      <Selector genre={genre} setGenre={setGenre} />
      <div className='under-selector'>
        <Counter />
        <Joke genre={genre} />
      </div>
    </div>
  );
}

export default App;
