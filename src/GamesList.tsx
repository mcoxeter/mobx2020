import * as React from 'react';
import * as appStore from './store';
import { useObserver } from 'mobx-react';

/* This is a MobX Observable component, because it wraps the component in useObserver */
const GamesList = () => {
  const store = React.useContext(appStore.StoreContext);

  return useObserver(() => (
    <ul>
      {store.gameTitles.map((title) => (
        <li key={title}>{title}</li>
      ))}
    </ul>
  ));
};
export default GamesList;
