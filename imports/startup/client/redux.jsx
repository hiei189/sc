import React, { Component } from 'react'
import { Provider } from 'react-redux'
import App from '../../ui/layouts/App.jsx';
import { createStore } from 'redux';
import rootReducer from '../../api/Reducers.jsx';


function configureStore(initialState) {
  return createStore(rootReducer,initialState)
    // rootReducer,initialState
}

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
