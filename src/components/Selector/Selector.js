import React from 'react';
import './Selector.css';
const Selector = ({ genre, setGenre }) => {
  return (
    <form>
      <div className='outside-selector'>
        <label>Dark: </label>
        <input
          type='radio'
          name='gender'
          value='Dark'
          onChange={() => setGenre('Dark')}
          checked={genre === 'Dark'}
        />
        <label>Misc:</label>
        <input
          type='radio'
          name='gender'
          value='Misc'
          onChange={() => setGenre('Misc')}
          checked={genre === 'Misc'}
        />
        <label>Programming:</label>
        <input
          type='radio'
          name='gender'
          value='Programming'
          onChange={() => setGenre('Programming')}
          checked={genre === 'Programming'}
        />
        <label>Pun:</label>
        <input
          type='radio'
          name='gender'
          value='Pun'
          onChange={() => setGenre('Pun')}
          checked={genre === 'Pun'}
        />
        <label>Spooky:</label>
        <input
          type='radio'
          name='gender'
          value='Spooky'
          onChange={() => setGenre('Spooky')}
          checked={genre === 'Spooky'}
        />
      </div>
    </form>
  );
};

export default Selector;
