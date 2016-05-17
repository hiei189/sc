import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const styles = {
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
  }
}

const NewPlayer = ({player,...rest}) => {
  console.log(player);
  return (
    <TextField {...rest} 
    type={'number'} 
    floatingLabelText = {player}
    style = {styles.root} />
  );
}

export default NewPlayer;
