import React from 'react';
import './css/App.css';

import Navigationbar from './components/layout/navigationBar';
import Footer from './components/layout/footer'

import Home from './components/pages/home'
import About from './components/pages/about'
import Login from './components/pages/login'

import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Navigationbar/>
          <Route exact path='/' render={props => (
            <React.Fragment>
              <Home />
            </React.Fragment>
          )} />
          <Route path='/about' component={About}/>
          <Route path='/login' component={Login} />
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
