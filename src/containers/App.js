import React from 'react';
// import {BrowserRouter,Route, Switch} from 'react-router-dom';
import { Router } from "@reach/router"

import Main from './Login';
import MainPage from '../components/MainPage/MainPage';
import '../App.css';

const App = () => {
  return (
    <div className="App">
          <Router>
            <Main path = "/"></Main>
          </Router>
          <Router>
            <MainPage path = "/mainPage" />
          </Router>
    </div>
  );
}

export default App;
