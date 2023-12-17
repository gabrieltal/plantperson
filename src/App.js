import './App.css';
import React, { Component } from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import { HashRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Nav />
        <Route exact path="/" component={Home} />
      </HashRouter>
    )
  }
}

export default App;
