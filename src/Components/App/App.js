import React, { Component } from 'react';
import {HashRouter, Switch, Route } from 'react-router-dom';
import Listing from '../../Container/Listing/Listing';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Listing} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
