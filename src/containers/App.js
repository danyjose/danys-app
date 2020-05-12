import React, {useState} from 'react';
import { Router } from "@reach/router"

import Login from './Login';
import MainPage from '../components/MainPage/MainPage';

import '../App.css';

const App = () => {
  const [isloggedin, setLoggedin] = useState(false);
  return (
    <div className="App">
          <Router>
            <MainPage loggedin={isloggedin} path = "/"></MainPage>
            <Login setLoggedin={setLoggedin} path="/login/*" />
          </Router>
    </div>
  );
}

export default App;
