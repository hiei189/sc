import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const styles = {
  root: {
    width: '80%',
    margin:'auto'
  },
  textfield: {
    width: '100%'
  }
}

const NewPlayer = ({player,...rest}) => {
  console.log(player);
  return (
    <div style = {styles.root}>
      <TextField {...rest}
      type={'string'}
      floatingLabelText = {player}
      style  = {styles.textfield}
       />
    </div>
  );
}

export default NewPlayer;
