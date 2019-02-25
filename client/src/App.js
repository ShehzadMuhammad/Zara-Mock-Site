import React, { Component } from 'react';

import AppNavBar from './components/AppNavBar';
import MensItemsSection from './components/MensItemsSection';
import ShoppingCartSection from './components/ShoppingCartSection';
import WomensItemsSection from './components/WomensItemsSection';
import ShoesItemsSection from './components/ShoesItemsSection';

import { Provider } from 'react-redux';
import store from './store';

import { Route } from 'react-router-dom';


import './App.css';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <Route path="/Mens" component={MensItemsSection} />
        <Route path="/Womens" component={WomensItemsSection} />
        <Route path="/Shoes" component={ShoesItemsSection} />
        <Route path="/Shopping Cart" component={ShoppingCartSection} />

      </div>
      </Provider>
    );
  }
}

export default App;
