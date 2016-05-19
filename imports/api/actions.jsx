export const ADD_PLAYER = 'ADD_PLAYER'
export const FINISH_GAME = 'FINISH_GAME'
export const UPDATE_SCORE = 'UPDATE_SCORE'
export const START_GAME = 'START_GAME'
export const CHANGE_TITLE = 'CHANGE_TITLE'

export function addPlayer(player) {
  return { type: ADD_PLAYER, player }
}

export function updateScore(player, score) {
  return { type: UPDATE_SCORE, player, score }
}

export function finishGame() {
  return { type: FINISH_GAME }
}

export function startGame() {
  return { type: START_GAME }
}

export function changeTitle(title) {
  return { type: CHANGE_TITLE, title }
}
