import * as _ from 'lodash';

import { normalizeCourse as normalize } from './Normalizers';
import { getNextScoreId, getNextCourseId, getNextHoleId } from './Utils';
import realm from './realm';


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

export default {
  getAll,
  update,
  save
};
