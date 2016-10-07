import * as _ from 'lodash';

import realm from './realm';


class RealmPlayer {
    getAll() {
        return _.values(realm.objects('Player'));
    }

    getNextPlayerId() {
        if (realm.objects('Player').length === 0) {
            return 1;
        }
        return _.chain(realm.objects('Player'))
            .map((p) => p.id)
            .max()
            .value() + 1;
    }

    save(name) {
        return new Promise((success) => {
            realm.write(() => {
                const player = {
                    id: this.getNextPlayerId(),
                    name
                };
                const savedPlayer = realm.create('Player', player);
                success(savedPlayer);
            });
        });
    }

    remove(id) {
        realm.write(() => {
            const player = realm.objects('Player').filtered(`id = ${id}`);
            if (player) {
                realm.delete(player);
            }
        });
    }
}

export default RealmPlayer;
