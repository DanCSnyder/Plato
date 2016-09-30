import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';

import platoApp from './plato';

const loggerMiddleware = createLogger();

const store = createStore(
  platoApp,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

const render = () => {
  ReactDOM.render(
    <PlatoApp />,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();
