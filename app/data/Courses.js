import * as _ from 'lodash';

import realm from './realm';


const getNextId = (schema) => {
    if (realm.objects(schema).length === 0) {
        return 1;
    }
    return _.chain(realm.objects(schema))
        .map((p) => p.id)
        .max()
        .value() + 1;
};

const getNextScoreId = () => getNextId('Score');

const getNextCourseId = () => getNextId('Course');

const getNextHoleId = () => getNextId('Hole');

const normalize = (course) => {
    const copy = { ...course };
    copy.holes = _.values(course.holes).map((hole) => ({ ...hole }));
    return copy;
};

class Courses {
    getAll() {
        return _.values(realm.objects('Course')).map(normalize);
    }

    update(course, name, pars) {
        return new Promise((success) => {
            const savedCourse = realm.objectForPrimaryKey('Course', course.id);
            const allScores = realm.objects('Score');
            realm.write(() => {
                savedCourse.name = name;

                const removable = [];
                _.values(savedCourse.holes).forEach((hole) => {
                    if (hole.holenumber > pars.length) {
                        _.values(allScores).forEach((score) => {
                            if (score.hole.id === hole.id) {
                                removable.push(score);
                            }
                        });
                        removable.push(hole);
                    } else {
                        hole.par = pars[hole.holenumber - 1];
                    }
                });
                realm.delete(removable);

                const holeCount = _.values(course.holes).length;
                pars.slice(holeCount).forEach((par, index) => {
                    const holenumber = holeCount + index + 1;
                    const hole = realm.create('Hole', {
                        id: getNextHoleId(),
                        par,
                        holenumber
                    });
                    savedCourse.holes.push(hole);

                    const games = _.values(realm.objects('Game'));
                    games.forEach((game) => {
                        if (game.course.id === course.id) {
                            const players = _.values(game.players);
                            players.forEach((player) => {
                                const score = {
                                    id: getNextScoreId(),
                                    hole,
                                    player,
                                    score: par
                                };
                                game.scores.push(realm.create('Score', score));
                            });
                        }
                    });
                });

                success(normalize(savedCourse));
            });
        });
    }

    save(name, pars) {
        return new Promise((success) => {
            realm.write(() => {
                const course = realm.create(
                    'Course', { id: getNextCourseId(), name }
                );
                pars.forEach((par, index) => {
                    course.holes.push(
                        realm.create('Hole', {
                            id: getNextHoleId(),
                            par,
                            holenumber: index + 1
                        })
                    );
                });
                success(normalize(course));
            });
        });
    }
}

export default Courses;
