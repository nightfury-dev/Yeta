import * as _ from 'lodash';

import realm from './realm';


class RealmCourse {
    getAll() {
        return _.values(realm.objects('Course'));
    }

    getNextId(schema) {
        if (realm.objects(schema).length === 0) {
            return 1;
        }
        return _.chain(realm.objects(schema))
            .map((p) => p.id)
            .max()
            .value() + 1;
    }

    getNextCourseId() {
        return this.getNextId('Course');
    }

    getNextHoleId() {
        return this.getNextId('Hole');
    }

    save(name, pars) {
        return new Promise((success, error) => {
            realm.write(() => {
                let course = realm.create('Course', {id: this.getNextCourseId(), name});
                pars.forEach((par, index) => {
                    course.holes.push(
                        realm.create('Hole', {
                            id: this.getNextHoleId(),
                            par,
                            holenumber: index + 1
                        })
                    );
                });
                success(course);
            });
        });
    }
}

export default RealmCourse;
