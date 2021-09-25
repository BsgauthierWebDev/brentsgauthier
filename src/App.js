import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
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
      </>
    )
  }

  render() {
    return (
      <div className = 'App'>
        <main className = 'app-main'>
          {this.renderMainRoutes()}
        </main>
        <footer id = 'footer'></footer>
      </div>
    )
  }
}