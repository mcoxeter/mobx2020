import * as React from 'react';
import * as appStore from './store';

const NewGameForm = () => {
  const store = React.useContext(appStore.StoreContext);
  const [game, setGame] = React.useState('');
  return (
    <form
      onSubmit={(e) => {
        store.addGame(game);
        setGame('');
        e.preventDefault();
      }}
    >
      <input
        type='text'
        value={game}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setGame(e.target.value);
        }}
      />
      <button type='submit'>Add</button>
    </form>
  );
};

export default NewGameForm;
