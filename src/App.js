import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Route from './Route'
// import firebase from 'firebase';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Route />
      
    </Provider>
    //<h1>hello</h1>
    );
  }
}

export default App;
