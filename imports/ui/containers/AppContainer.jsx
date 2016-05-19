import { Meteor } from 'meteor/meteor';
import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import App from '../layouts/App.jsx';
import Theme from '../Theme/Theme.jsx';


const mapStateToProps = (state) => {
	return { title: state.title }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: (title) => {
      dispatch(changeTitle(title))
    }
  }
}

const AppContainer = connect(mapStateToProps,undefined)(App)

export default AppContainer;
