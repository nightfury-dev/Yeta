import Courses from '../data/courses';
import RealmGame from '../data/games';
import Players from '../data/Players';

const realmGame = new RealmGame();
const players = new Players();
const courses = new Courses();


export function addPlayer(name) {
    return (dispatch) => players.save(name).then(
        (savedPlayer) => dispatch({
            type: 'PLAYER_ADDED',
            player: savedPlayer
        })
    );
}

export function removePlayer(id) {
    return (dispatch) => players.remove(id).then(
        () => dispatch({
            type: 'PLAYER_REMOVED',
            id
        })
    );
}

export function createGame(courseId, playerIds, coursePars, callback) {
    return (dispatch) => realmGame.save(courseId, playerIds).then(
        (savedGame) => dispatch({
            type: 'GAME_CREATED',
            game: savedGame,
            callback
        })
    );
}

export function updateHole(gameId, hole) {
    return (dispatch) => realmGame.updateGameHole(gameId, hole).then(
        (game) => dispatch({
            type: 'HOLE_UPDATED',
            game
        })
    );
}

export function addCourse(name, pars) {
    return (dispatch) => courses.save(name, pars).then(
        (savedCourse) => dispatch({
            type: 'COURSE_ADDED',
            course: savedCourse
        })
    );
}

export function updateScore(gameId, playerId, hole, score) {
    return {
        type: 'UPDATE_SCORE',
        gameId,
        playerId,
        hole,
        score
    };
}

export function removeGame(game) {
    const gameId = game.id;
    return (dispatch) => realmGame.remove(game).then(() => dispatch({
        type: 'GAME_REMOVED',
        gameId
    }));
}
