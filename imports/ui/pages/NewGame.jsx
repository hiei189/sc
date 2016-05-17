import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import NewPlayer from '../components/NewPlayer';

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

class NewGame extends React.Component {
  render () {
    const Players = ['Jugador 1', 'Jugador 2', 'Jugador 3', 'Jugador 4'];
    return(
      <div style={styles.root}>
        {Players.map((player,i)=>{
          return <NewPlayer key={i} name={player}/>
        })}
        <FloatingActionButton style={styles.send}>
          <ContentSend />
        </FloatingActionButton>
      </div>
    );
  }
}

export default NewGame;
