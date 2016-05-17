import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
   return(
     <div>
       <AppBar title = {this.props.title} />
       {this.props.children}
     </div>
   );
  }
}

export default App;
