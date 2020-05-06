import React from 'react';
import { Router } from "@reach/router"

import Login from './Login';
import MainPage from '../components/MainPage/MainPage';

import '../App.css';

const App = () => {
  return (
    <div className="App">
          <Router>
            <MainPage path = "/"></MainPage>
            <Login path="/login/*" />
          </Router>
    </div>
  );
}

export default App;
