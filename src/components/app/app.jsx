import React, {Component} from 'react';
import {Route,Redirect,Switch} from 'react-router-dom'

import Home from '../../views/home/home';
import About from '../../views/about/about';
import MyNavLink from '../my-nav-link/my-nav-link'
class App extends Component {
  render () {
    return (
      <div className="container">
        <h1 className="row">react router demo</h1>
        <div className="list-group col-md-2 col-xs-4">
          <MyNavLink to="/home">home</MyNavLink>
          <MyNavLink to="/about">about</MyNavLink>
        </div>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Redirect to="/about"/>
        </Switch>
      </div>
    )
  }
}

export default App;