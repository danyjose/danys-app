import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import Main from './Login';
import LandingPage from '../components/LandingPage/MainPage';
import '../App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route  exact path='/'>
            <Main />
          </Route>
          <Route path='/landingPage'>
            <LandingPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
