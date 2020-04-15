import * as React from 'react';
import * as appStore from './store';
import GamesList from './GamesList';
import NewGameForm from './NewGameForm';

function App() {
  return (
    <appStore.StoreProvider>
      <GamesList></GamesList>
      <NewGameForm></NewGameForm>
    </appStore.StoreProvider>
  );
}

export default App;
