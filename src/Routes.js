import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from "./Components/HomePage";
import {Construction} from "./Components/Construction";
import About from './Components/About';
import Contact from './Components/Contact';
import Products from './Components/Products';

export const Router = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about-us" component={About} />
        <Route path="/products" component={Products}/>
        <Route path="/contact" component={Contact} />
    </Switch>
    )

export default Router;