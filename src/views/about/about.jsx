import React, {Component} from 'react';
import {NavLink,Switch,Route,Redirect} from 'react-router-dom';

import Message from '../message/message'
import News from '../news/news'

class About extends Component {
  render () {
    return (
      <div className="col-md-6 col-sm-8">
        <ul className="nav nav-tabs">
          <li role="presentation">
            <NavLink to="/about/news">News</NavLink>
          </li>
          <li role="presentation">
            <NavLink to="/about/message">Message</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/about/news" component={News}/>
          <Route path="/about/message" component={Message}/>
          <Redirect to="/about/news"/>
        </Switch>
      </div>
    )
  }
}

export default About;