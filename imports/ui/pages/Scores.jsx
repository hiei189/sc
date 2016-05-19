import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import UserScoreContainer from '../components/UserScore.jsx';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import { Form } from 'react-redux-form';

import { updateScore } from '../../api/actions.jsx';

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

class ScoresPresentational extends React.Component {
  constructor(props){
    super(props);
    this.users =
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
  }

  handleRefreshScore(a){
    const { dispatch } = this.props;
    dispatch(updateScore(1,20));
  }

  render() {
    const users = this.users;
    return (
      <div>
        <Form model = 'partialScore' onSubmit={(a)=> this.handleRefreshScore(a)}>
          <div style = {styles.root}>
            {
              users.map((user,i)=>{
                return <UserScoreContainer playerNumber={i} key = {i} name = {user.name} score = {user.score}/>
              })
            }
          </div>
          <FloatingActionButton type='submit' style={styles.refresh}>
              <NavigationRefresh />
          </FloatingActionButton>
        </Form>
      </div>
    );
  }
}

const Scores = connect()(ScoresPresentational)

export default Scores;
