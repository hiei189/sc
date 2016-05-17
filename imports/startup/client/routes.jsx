import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from '../../ui/Theme/Theme.jsx';

import Record from '../../ui/pages/Record.jsx';
import App from '../../ui/layouts/App.jsx';
import AppContainer from '../../ui/containers/AppContainer.jsx';
import Scores from '../../ui/pages/Scores.jsx';


export const renderRoutes = () => (
  <MuiThemeProvider muiTheme={Theme}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Record}/>
        <Route path="scores" component={Scores}/>
      </Route>
    </Router>
  </MuiThemeProvider>
);
