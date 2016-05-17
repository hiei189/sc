import { combineReducers } from 'redux'
import {ADD_PLAYER,FINISH_GAME,UPDATE_SCORE,START_GAME,CHANGE_TITLE} from './actions.jsx'

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

const initialState = {
  title: 'Score'};

const title = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return Object.assign({},{title:action.title})
    default:
      return state
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



const rootReducer = combineReducers({
  title
})


export default rootReducer;
