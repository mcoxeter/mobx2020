import * as React from 'react';
import { useLocalStore } from 'mobx-react';

const initalState: IStore = {
  gameTitles: [],
  addGame: () => {},
};

const StoreContext = React.createContext<IStore>(initalState);

const StoreProvider = (props: any) => {
  const store = useLocalStore(() => ({
    gameTitles: ['Amok'],
    addGame: (title: string) => store.gameTitles.push(title),
  }));
  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
};
interface IStore {
  gameTitles: string[];
  addGame: (title: string) => void;
}

export { StoreProvider, StoreContext };
