import React, { Component } from 'react';
import { Switch, Route, Redirect,BrowserRouter as Router } from 'react-router-dom'
//首页的index
import Home from './views/Home/index'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/home" component={ Home }></Route>
            <Redirect from="/" to="/home"></Redirect>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;