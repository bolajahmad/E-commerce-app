import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from '../Components/Home/Home'
import Header from '../Components/Home/Header/Header'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/header" component={Header} />
        </Switch>
    )
}