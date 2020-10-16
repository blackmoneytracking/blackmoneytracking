
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/main/index';
import OnlineStores from './pages/onlineStores/index';
import About from './pages/about/index';
import Ongs from "./pages/Ongs/index";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/onlineStores" component={OnlineStores} />
                <Route path="/about" component={About} />
                <Route path="/ongs" component={Ongs} />
            </Switch>
        </BrowserRouter>
    );
}