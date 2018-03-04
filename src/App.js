import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Reducers from './reducers';
import Router from './Router';

class App extends Component {
  render() {
    console.disableYellowBox = true;
    const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

