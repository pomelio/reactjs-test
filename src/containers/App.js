// @flow

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import './App.css';
import ProductsPage from './ProductsPage';

import { createBrowserHistory } from 'history';
var history = createBrowserHistory();

history.listen(function (location) {
    //window.ga('send', 'pageview', location.pathname);
    //window.ga('myTracker.send', 'pageview', location.pathname);
});

const App = () => (
	<div className="flex-center" >
		<Router history={history}>
			<Switch>
				<Route exact path={'/'} component={ProductsPage}/>
				<Route exact path={'/products/:page'} component={ProductsPage}/>
				<Route exact path={'/products/:page/:len'} component={ProductsPage}/>
            </Switch>
        </Router>
    </div>
)

export default App;
