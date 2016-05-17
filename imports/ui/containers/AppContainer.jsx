import { Meteor } from 'meteor/meteor';
import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from '../layouts/App.jsx';
import Theme from '../Theme/Theme.jsx';

class AppContainer extends React.Component {
  render () {
    return(
      <MuiThemeProvider muiTheme={Theme}>
        <App />
      </MuiThemeProvider>
    );

  }
}

export default AppContainer;
