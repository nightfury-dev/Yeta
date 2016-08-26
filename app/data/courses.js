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

function saveCourse(name, pars) {
    return new Promise((success, error) => {
        realm.write(() => {
            let course = realm.create('Course', {id: getNextCourseId(), name});
            pars.forEach((par, index) => {
                course.holes.push(
                    realm.create('Hole', {
                        id: getNextHoleId(),
                        par,
                        holenumber: index + 1
                    })
                );
            });
            success(course);
        });
    });
}


export { getCourses, getNextId, getNextCourseId, getNextHoleId, saveCourse };
