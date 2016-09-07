import RealmCourse from '../data/courses';
import RealmGame from '../data/games';


const realmGame = new RealmGame();

export function addPlayer(name) {
    return {
        type: 'ADD_PLAYER',
        name
    };
}

export function removePlayer(id) {
    return {
        type: 'REMOVE_PLAYER',
        id
    };
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

export function addCourse(name, pars, callback) {
    const realmCourse = new RealmCourse();
    return (dispatch) => realmCourse.save(name, pars).then(
        (savedCourse) => dispatch({
            type: 'COURSE_ADDED',
            course: savedCourse,
            callback
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
