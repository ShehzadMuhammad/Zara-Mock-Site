import React, { Component } from 'react';

import AppNavBar from './components/AppNavBar';
import MensItemsSection from './components/MensItemsSection';

import { Provider } from 'react-redux';
import store from './store';


import './App.css';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <MensItemsSection />
      </div>
      </Provider>
    );
  }
}

export default App;
