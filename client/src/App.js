import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Components/Home/Home'
import Market from './Components/Market/Market'

import './App.scss'


const App = () => {
  return (
   <>
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/market' component={Market} />
    </Router>
   </>
  );
}

export default App;
