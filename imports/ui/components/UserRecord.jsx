import React, { PropTypes } from 'react';

const styles = {
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
  },
  name:{
    flex:3
  },
  wins:{
    flex:1
  }
}

const UserRecord = ({user}) => {
  return (
    <div style={styles.root}>
      <div style={styles.name}>
        {user.name}
      </div>
      <div style={styles.wins}>
        {user.wins}
      </div>
    </div>
  );
}

export default UserRecord;
