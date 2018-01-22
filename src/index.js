import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import GithubSearch from './containers/GithubSearch';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);

const App = () => (
  <Provider store={store}>
    <GithubSearch />
  </Provider>
);

render(<App />, document.getElementById('root'));
