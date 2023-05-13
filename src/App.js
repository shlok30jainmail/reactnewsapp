// import logo from './logo.svg';
import './App.css';

// class base components 
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  // Routes,
  Route,
  // Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        {/* Hello My First class base components {this.c} */}
        <NavBar/>
        {/* <News pageSize = {5} country ="in" category="sports"/> */}
        <Switch>
      {/* <Routes> */}
          <Route exact path='/'>
        <News key="general" pageSize = {5} country ="in" category="general"/>
        </Route>

        <Route exact path='/general'>
        <News key="general" pageSize = {5} country ="in" category="general"/>
        </Route>

          <Route exact path='/business'>
          <News key="business" pageSize = {5} country ="in" category="business"/>

          </Route>

          <Route exact path='/sports'>
          <News key="sports" pageSize = {5} country ="in" category="sports"/>

          </Route>

          <Route exact path='/health'>
          <News key="health" pageSize = {5} country ="in" category="health"/>

          </Route>

          <Route exact path='/entertainment'>
          <News key="entertainment" pageSize = {5} country ="in" category="entertainment"/>

          </Route>

          <Route exact path='/science'>
          <News key="science" pageSize = {5} country ="in" category="science"/>

          </Route>

          <Route exact path='/technology'>
          <News key="technology" pageSize = {5} country ="in" category="technology"/>

          </Route>

         
        </Switch>
        {/* </Routes> */}
        </Router>
      </div>
    )
  }
}
