import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from "./Components/HomePage";
import {Construction} from "./Components/Construction";

export const Router = () => (
    <Switch>
        <Route exact path="/" component={Construction} />
        <Route path="/home" component={HomePage}/>
    </Switch>
    )

export default Router;