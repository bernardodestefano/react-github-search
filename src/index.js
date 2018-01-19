import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import searchReducer from './reducers/searchReducer';
import GithubSearch from './containers/GithubSearch';

const store = createStore(searchReducer);

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

const App = () => (
  <Provider store={store}>
    <GithubSearch />
  </Provider>
);

render(<App />, document.getElementById('root'));
