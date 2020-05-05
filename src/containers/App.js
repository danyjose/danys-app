import React from 'react';
import { Router } from "@reach/router"

import Login from './Login';
import MainPage from '../components/MainPage/MainPage';
import '../App.css';

const App = () => {
  return (
    <div className="App">
          <Login></Login>
          <Router>
            <MainPage path = "/mainPage"></MainPage>
          </Router>
    </div>
  );
}

export default App;
