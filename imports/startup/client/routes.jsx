import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from '../../ui/Theme/Theme.jsx';

import Record from '../../ui/pages/Record.jsx';
import NewGame from '../../ui/pages/NewGame.jsx';
import Scores from '../../ui/pages/Scores.jsx';
import App from '../../ui/layouts/App.jsx';
import AppContainer from '../../ui/containers/AppContainer.jsx';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import reducers from '../../api/Reducers.jsx';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger();
const rMiddleware = routerMiddleware(browserHistory);

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),applyMiddleware(thunk,logger,rMiddleware));


const history = syncHistoryWithStore(browserHistory, store)


export const renderRoutes = () => (
	<Provider store={store}>
		<MuiThemeProvider muiTheme={Theme}>
	    <Router history={history}>
	      <Route path="/" component={AppContainer}>
	        <IndexRoute component={Record}/>
	        <Route path="scores" component={Scores}/>
	        <Route path="newgame" component={NewGame}/>
	      </Route>
	    </Router>
	 	</MuiThemeProvider>
	</Provider>
);
