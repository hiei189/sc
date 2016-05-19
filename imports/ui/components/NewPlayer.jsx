import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import { createFieldClass, Field, controls } from 'react-redux-form';
import { connect } from 'react-redux';

const styles = {
  root: {
    width: '80%',
    margin:'auto'
  },
  textfield: {
    width: '100%'
  }
}

const MaterialField = createFieldClass({
  'TextField': controls.text
});

const NewPlayer = ({player, playerNumber, ...rest}) => {
  return (
    <div style = {styles.root}>
      <MaterialField model = {'player.'+ (playerNumber+1).toString()}>
        <TextField {...rest}
          type={'string'}
          floatingLabelText = {player}
          style  = {styles.textfield}/>
      </MaterialField>
    </div>
  );
}

const NewPlayerContainer = connect()(NewPlayer);

export default NewPlayerContainer;
