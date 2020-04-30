import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Home from './Components/Home/Home'
import Market from './Components/Market/Market'

import './App.scss'

library.add(fab)


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
