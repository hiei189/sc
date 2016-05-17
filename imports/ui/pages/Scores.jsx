import React, { PropTypes } from 'react';
import UserScore from '../components/UserScore.jsx';

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
    <div style = {styles.root}>
      {
        users.map((user)=>{
          return <UserScore key = {user.id} name = {user.name} score = {user.score}/>
        })
      }
    </div>
  )
}

export default Scores;
