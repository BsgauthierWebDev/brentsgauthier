import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import About from './components/About/About';
import Landing from './components/Landing/Landing';
import Nav from './components/Nav/Nav';
import './App.css';

export default class App extends Component {
  renderMainRoutes() {
    return (
      <>
        <Route
          exact
          path = '/'
          component = {Landing}
        />
        <Route
          path = '/about'
          component = {About}
        />
      </>
    )
  }

  render() {
    return (
      <div className = 'App'>
        <Nav />
        <main className = 'app-main'>
          {this.renderMainRoutes()}
        </main>
        <footer id = 'footer'></footer>
      </div>
    )
  }
}