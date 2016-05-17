import React, { PropTypes } from 'react';
import Badge from 'material-ui/Badge';
import TextField from 'material-ui/TextField';

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


const UserScore = ({name, score}) => {
  return (
    <div style={styles.root}>
      <div style={styles.name}>
        {name}
      </div>
      <Badge secondary={true} badgeContent={score} />
      <TextField type={'number'} style = {styles.scoreToAdd} />
    </div>
  );
}

export default UserScore;
