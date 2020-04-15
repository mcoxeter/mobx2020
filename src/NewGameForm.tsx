import * as React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

export const NewGameForm: React.FC<{
  onSubmit: (title: string) => void;
}> = ({ onSubmit }) => {
  const [game, setGame] = React.useState('');
  return (
    <form
      onSubmit={(e) => {
        onSubmit(game);
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
