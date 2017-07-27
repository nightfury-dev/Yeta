import * as _ from 'lodash';

import { normalizeCourse as normalize } from './Normalizers';
import { getNextScoreId, getNextCourseId, getNextHoleId } from './Utils';
import realm from './realm';
import Games from './Games';

const courses = realm.objects('Course');
const scores = realm.objects('Score');
const games = realm.objects('Game');

const getAll = () => _.map(courses, normalize);

const update = (course, name, pars) => new Promise((success) => {
  const savedCourse = realm.objectForPrimaryKey('Course', course.id);
  realm.write(() => {
    savedCourse.name = name;

    _.forEach(savedCourse.holes, (hole) => {
      if (hole.holenumber > pars.length) {
        realm.delete(scores.filtered('hole.id = $0', hole.id));
        realm.delete(hole);
      } else {
        /* eslint no-param-reassign: 0 */
        hole.par = pars[hole.holenumber - 1];
      }
    });

    const holeCount = _.values(course.holes).length;
    pars.slice(holeCount).forEach((par, index) => {
      const holenumber = holeCount + index + 1;
      const hole = realm.create('Hole', {
        id: getNextHoleId(),
        par,
        holenumber
      });
      savedCourse.holes.push(hole);

      const courseGames = games.filtered(
        'course.id = $0',
        course.id
      );
      _.forEach(courseGames, (game) => {
        _.forEach(game.players, (player) => {
          const score = {
            id: getNextScoreId(),
            hole,
            player,
            score: par
          };
          game.scores.push(realm.create('Score', score));
        });
      });
    });

    success(normalize(savedCourse));
  });
});

const save = (name, pars) => new Promise((success) => {
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

const remove = (id) => new Promise((success) => {
  const course = realm.objectForPrimaryKey('Course', id);
  const removableGames = games.filtered('course.id = $0', id);
  const promises = _.values(removableGames).map(Games.remove);
  Promise.all(promises).then(() => {
    realm.write(() => {
      realm.delete(course.holes);
      realm.delete(course);
      success();
    });
  });
});

const updateNote = (course, hole, note) => new Promise((success) => {
  const savedHole = realm.objectForPrimaryKey('Hole', hole.id);

  realm.write(() => {
    savedHole.note = note;
    success(normalize(realm.objectForPrimaryKey('Course', course.id)));
  });
});

export default {
  getAll,
  update,
  save,
  remove,
  updateNote
};
