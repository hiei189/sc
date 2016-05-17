import React, { PropTypes } from 'react';
import UserRecord from '../components/UserRecord.jsx';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


styles = {
  root:{
    display: 'flex',
    width: '100%',
    flexDirection: 'column'
  },
  add:{
    position:'absolute',
    right: 20,
    bottom: 20
  }
};

const Record = ({users}) => {
  users =
    [
      {
        name: 'Jose',
        wins:10
      },
      {
        name: 'Paloma',
        wins:5
      }
    ];
  return (
    <div>
      <div style = {styles.root}>
        {
          users.map((user)=>{
            return <UserRecord user = {user}/>
          })
        }
      </div>
      <FloatingActionButton style={styles.add}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  )
}


export default Record;
