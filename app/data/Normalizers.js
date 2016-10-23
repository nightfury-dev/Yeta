import * as _ from 'lodash';


export const normalizePlayer = (player) => ({ ...player });

const normalizeHole = (hole) => ({ ...hole });

export const normalizeCourse = (course) => ({
    id: course.id,
    name: course.name,
    holes: _.values(course.holes).map(normalizeHole)
});

const normalizeScore = (score) => ({
    ...score,
    player: normalizePlayer(score.player),
    hole: normalizeHole(score.hole)
});

export const normalizeGame = (game) => ({
    ...game,
    players: _.map(game.players, normalizePlayer),
    course: normalizeCourse(game.course),
    scores: _.map(game.scores, normalizeScore)
});
