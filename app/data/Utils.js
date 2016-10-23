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

export const getNextGameId = () => getNextId('Game');

export const getNextScoreId = () => getNextId('Score');

export const getNextHoleId = () => getNextId('Hole');

export const getNextCourseId = () => getNextId('Course');

export const getNextPlayerId = () => getNextId('Player');
