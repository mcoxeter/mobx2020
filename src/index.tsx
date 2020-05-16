import * as React from 'react';
import { render } from 'react-dom';
import { App, AppState } from './app';

const appState = new AppState();

render(<App state={appState} />, document.getElementById('root'));
ss;
