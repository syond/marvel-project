import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Character from './pages/Characters';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact/>
                <Route component={Character} path="/characters" exact/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
