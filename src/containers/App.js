import React from 'react';
import { Router } from "@reach/router"

import Login from './Login';
import MainPage from '../components/MainPage/MainPage';
import '../App.css';

const App = () => {
  return (
    <div className="App">
          <Router>
            <Login path = "/" />
            <MainPage path = "/mainPage" />
          </Router>
    </div>
  );
}

export default App;
