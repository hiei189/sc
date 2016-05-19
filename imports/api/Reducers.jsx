import { combineReducers } from 'redux'
import {ADD_PLAYER,FINISH_GAME,UPDATE_SCORE,START_GAME,CHANGE_TITLE} from './actions.jsx'
import { modelReducer, formReducer } from 'react-redux-form';

function updateScore(state = {}, action) {
  //player, score
  switch (action.type) {
    case UPDATE_SCORE:
      return {
      }
    default:
      return state
  }
}

const initialStateTitle = 'Score';

const title = (state = initialStateTitle, action) => {
  console.log(action);
  switch (action.type) {
    case CHANGE_TITLE:
      return action.title
    default:
      return state
  }
}

const initialStateGame = {
  started: false,
}

function game(state = initialStateGame,action) {
  switch (action.type) {
    case START_GAME:
        return  {...state,started:true}
    case FINISH_GAME:
        return  {...state,started:false}
    default:
      return state;
  }
}


function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

const initialPlayerState = {
  '1': '',
  '2': '',
  '3': '',
  '4': ''
};


const reducers = {
  title,
  player: modelReducer('player', initialPlayerState),
  playerForm: formReducer('player', initialPlayerState),
  game
}


export default reducers;
