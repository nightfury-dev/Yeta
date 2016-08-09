import * as _ from 'lodash';

import realm from './realm';


function getCourses() {
    return _.values(realm.objects('Course'));
}

function getNextId(schema) {
    if (realm.objects(schema).length === 0) {
        return 1;
    }
    return _.chain(realm.objects(schema))
        .map((p) => p.id)
        .max()
        .value() + 1;
}

function getNextCourseId() {
    return getNextId('Course');
}

function getNextHoleId() {
    return getNextId('Hole');
}

function addCourse(name, pars) {
    realm.write(() => {
        let course = realm.create('Course', {id: getNextCourseId(), name});
        pars.forEach((par) => {
            course.holes.push(
                realm.create('Hole', {id: getNextHoleId(), par})
            );
        });
    });
}


export { getCourses, getNextId, getNextCourseId, getNextHoleId, addCourse };
