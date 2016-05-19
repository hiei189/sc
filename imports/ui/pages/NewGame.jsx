import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import NewPlayerContainer from '../components/NewPlayer';
import { Form } from 'react-redux-form';
import { push } from 'react-router-redux'

import { connect } from 'react-redux';
import { changeTitle, startGame } from '../../api/actions.jsx';

const styles = {
  root: {
    width: '100%'
  },
  send:{
    position:'absolute',
    right: 20,
    bottom: 20
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: (title) => {
      dispatch(changeTitle(title))
    }
  }
}

class NewGamePresentational extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(changeTitle('Nuevo Juego'));
  }
  handleNewGame(){
    const { dispatch } = this.props;
    dispatch(startGame());
    dispatch(push('/scores'));
  }
  render () {
    const Players = ['Jugador 1', 'Jugador 2', 'Jugador 3', 'Jugador 4'];
    return(
      <div>
        <Form model = 'player' onSubmit={(a)=> this.handleNewGame()}>
          <div style={styles.root}>
              {Players.map((player,i)=>{return <NewPlayerContainer key={i} playerNumber = {i} player={player}/>})}
          </div>
          <FloatingActionButton style={styles.send} type='submit'>
            <ContentSend />
          </FloatingActionButton>
        </Form>
      </div>
    );
  }
}


const NewGame = connect()(NewGamePresentational)

export default NewGame;
