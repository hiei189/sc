import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import UserScore from '../components/UserScore.jsx';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';

const styles = {
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
  },
  refresh:{
    position:'absolute',
    right: 20,
    bottom: 20
  }
}


const Scores = ({users}) => {
  users =
    [
      {
        name: 'Jose',
        score:250,
        id:20
      },
      {
        name: 'Paloma',
        score:80,
        id:40
      }
    ];
  console.log('Scores');
  return (
    <div>
      <div style = {styles.root}>
        {
          users.map((user,i)=>{
            return <UserScore key = {i} name = {user.name} score = {user.score}/>
          })
        }
      </div>
      <FloatingActionButton style={styles.refresh}>
          <NavigationRefresh />
      </FloatingActionButton>
    </div>
  )
}

export default Scores;
