import './App.css';
import React, { Component } from 'react';
import Garden from './components/Garden';
import Art from './components/Art';
import Home from './components/Home';
import Nav from './components/Nav';
import { HashRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Garden} />
        <Route path="/art" component={Art} />
      </HashRouter>
    )
  }
}

export default App;
