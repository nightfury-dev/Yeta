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
