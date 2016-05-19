import React, { PropTypes } from 'react';
import Badge from 'material-ui/Badge';
import TextField from 'material-ui/TextField';
import { createFieldClass, Field, controls } from 'react-redux-form';
import { connect } from 'react-redux';

const styles = {
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
  },
  name:{
    flex:1
  },
  scoreToAdd:{
    flex:1
  }
}

const MaterialField = createFieldClass({
  'TextField': controls.text
});


const UserScore = ({name, score, playerNumber}) => {
  return (
    <div style={styles.root}>
      <div style={styles.name}>
        {name}
      </div>
      <Badge secondary={true} badgeContent={score} />
      <MaterialField model = {'partialScore.'+ (playerNumber+1).toString()}>
        <TextField type={'number'} style = {styles.scoreToAdd} />
      </MaterialField>
    </div>
  );
}


const UserScoreContainer = connect()(UserScore);

export default UserScore;
