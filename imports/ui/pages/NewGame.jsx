import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import NewPlayer from '../components/NewPlayer';
import { connect } from 'react-redux';

import { changeTitle } from '../../api/actions.jsx';

const styles = {
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
  },
  send:{
    position:'absolute',
    right: 20,
    bottom: 20
  }
}


const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    onMount: (title) => {
      dispatch(changeTitle(title))
    }
  }
}




class NewGamePresentational extends React.Component {
  componentWillMount() {
    this.props.onMount('Nuevo Juego');
  }
  render () {
    const Players = ['Jugador 1', 'Jugador 2', 'Jugador 3', 'Jugador 4'];
    return(
      <div style={styles.root}>
        {Players.map((player,i)=>{
          return <NewPlayer key={i} player={player}/> })}
        <FloatingActionButton style={styles.send}>
          <ContentSend />
        </FloatingActionButton>
      </div>
    );
  }
}


const NewGame = connect(undefined,
  mapDispatchToProps)(NewGamePresentational)

export default NewGame;
