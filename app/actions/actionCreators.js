import Courses from '../data/Courses';
import Games from '../data/games';
import Players from '../data/Players';
import {
  PLAYER_ADDED,
  PLAYER_REMOVED,
  GAME_CREATED,
  HOLE_UPDATED,
  COURSE_ADDED,
  COURSE_UPDATED,
  SCORE_UPDATED,
  GAME_REMOVED,
  CURRENT_GAME_CHANGED
} from './actionTypes';


const players = new Players();
const courses = new Courses();
const games = new Games();


export function addPlayer(name) {
    return (dispatch) => players.save(name).then(
        (savedPlayer) => dispatch({
            type: PLAYER_ADDED,
            player: savedPlayer
        })
    );
}

export function removePlayer(id) {
    return (dispatch) => players.remove(id).then(
        () => dispatch({
            type: PLAYER_REMOVED,
            id
        })
    );
}

export function createGame(courseId, playerIds) {
    return (dispatch) => games.save(courseId, playerIds).then(
        (savedGame) => dispatch({
            type: GAME_CREATED,
            game: savedGame
        })
    );
}

export function updateHole(gameId, hole) {
    return (dispatch) => games.updateGameHole(gameId, hole).then(
        (game) => dispatch({
            type: HOLE_UPDATED,
            game
        })
    );
}

export function addCourse(name, pars) {
    return (dispatch) => courses.save(name, pars).then(
        (savedCourse) => dispatch({
            type: COURSE_ADDED,
            course: savedCourse
        })
    );
}

export function updateCourse(course, name, pars) {
    return (dispatch) => courses.update(course, name, pars).then(
      (savedCourse) => dispatch({
          type: COURSE_UPDATED,
          course: savedCourse
      })
    );
}

export function updateScore(gameId, score, newScore) {
    return (dispatch) => games.updateScore(gameId, score, newScore).then(
        (game) => dispatch({
            type: SCORE_UPDATED,
            game
        })
    );
}

export function removeGame(game) {
    const gameId = game.id;
    return (dispatch) => games.remove(game).then(() => dispatch({
        type: GAME_REMOVED,
        gameId
    }));
}

export function changeCurrentGame(game) {
    return {
        type: CURRENT_GAME_CHANGED,
        game
    };
}
