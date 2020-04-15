import * as React from 'react';
import { GamesList, GamesListState } from './GamesList';
import { NewGameForm } from './NewGameForm';
import { observer } from 'mobx-react';

/*
 * Implementation that demonstrates the State Class Pattern
 */
export class AppState {
  gamesList = new GamesListState();
}

export const App: React.FC<{ state: AppState }> = observer(({ state }) => {
  return (
    <>
      <GamesList state={state.gamesList}></GamesList>
      <NewGameForm
        onSubmit={(title) => state.gamesList.add(title)}
      ></NewGameForm>
    </>
  );
});
