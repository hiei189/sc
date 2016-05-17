import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from '../../ui/Theme/Theme.jsx';

import Record from '../../ui/pages/Record.jsx';
import NewGame from '../../ui/pages/NewGame.jsx';
import Scores from '../../ui/pages/Scores.jsx';
import App from '../../ui/layouts/App.jsx';
import AppContainer from '../../ui/containers/AppContainer.jsx';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../api/Reducers.jsx';
let store = createStore(rootReducer);

export const renderRoutes = () => (
	<Provider store={store}>
		<MuiThemeProvider muiTheme={Theme}>
	    <Router history={browserHistory}>
	      <Route path="/" component={AppContainer}>
	        <IndexRoute component={Record}/>
	        <Route path="scores" component={Scores}/>
	        <Route path="newgame" component={NewGame}/>
	      </Route>
	    </Router>
	 	</MuiThemeProvider>
	</Provider>
);
