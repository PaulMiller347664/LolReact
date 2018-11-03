import React, { Component } from "react";
 import ChampSearch from "./champsearch";
 import About from "./about";
 import Home from './home'
 import {Route, NavLink, HashRouter} from 'react-router-dom';
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className='header'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/champsearch'>Find a champ!</NavLink></li>
            <li><NavLink to='/about'>about</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path='/' component={Home}/>
            <Route path='/champsearch' component={ChampSearch}/>
            <Route path='/about' component={About}/> 
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;