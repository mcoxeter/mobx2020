import * as React from 'react';
import { render } from 'react-dom';
import { App, AppState } from './App';

const appState = new AppState();

render(<App state={appState} />, document.getElementById('root'));
