import * as React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

/*
 * Implementation that demonstrates the State Class Pattern
 */

export class GamesListState {
  @observable
  gameTitles: string[] = [];

  @action
  public add(newTitle: string): void {
    this.gameTitles.push(newTitle);
  }
}

export const GamesList: React.FC<{ state: GamesListState }> = observer(
  ({ state }) => {
    return (
      <ul>
        {state.gameTitles.map((title) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    );
  }
);
