import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import CNS from './pages/CNS';
import CVS from './pages/CVS';
import Resp from './pages/Resp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ICUMockup 01 on Bluemix</h2>
        </div>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Switch>
          	<Route exact path="/" component={Home}/>
          	<Route path='/cns' compoment={CNS}/>
          	<Route path='/cvs' component={CVS}/>
          	<Route path='/resp' component={Resp}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
