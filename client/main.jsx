import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.jsx';
//import  Root  from '../imports/startup/client/redux.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

Meteor.startup(() => {
  render( renderRoutes(), document.getElementById('app'));
  injectTapEventPlugin();
});
