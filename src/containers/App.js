import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import Main from './Login';
import MainPage from '../components/MainPage/MainPage';
import '../App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route  exact path='/'>
            <Main />
          </Route>
          <Route path='/mainPage'>
            <MainPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
