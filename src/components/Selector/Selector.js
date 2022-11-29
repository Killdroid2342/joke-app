import React from 'react';
const Selector = ({ genre, setGenre }) => {
  return (
    <div className='text-center'>
      <form>
        <div className='p-5'>
          <label>Dark: </label>
          <input
            type='radio'
            name='gender'
            value='Dark'
            onChange={() => setGenre('Dark')}
            checked={genre === 'Dark'}
            className='m-2'
          />
          <label>Misc:</label>
          <input
            type='radio'
            name='gender'
            value='Misc'
            onChange={() => setGenre('Misc')}
            checked={genre === 'Misc'}
            className='m-2'
          />
          <label>Programming:</label>
          <input
            type='radio'
            name='gender'
            value='Programming'
            onChange={() => setGenre('Programming')}
            checked={genre === 'Programming'}
            className='m-2'
          />
          <label>Pun:</label>
          <input
            type='radio'
            name='gender'
            value='Pun'
            onChange={() => setGenre('Pun')}
            checked={genre === 'Pun'}
            className='m-2'
          />
          <label>Spooky:</label>
          <input
            type='radio'
            name='gender'
            value='Spooky'
            onChange={() => setGenre('Spooky')}
            checked={genre === 'Spooky'}
            className='m-2'
          />
        </div>
      </form>
    </div>
  );
};

export default Selector;
