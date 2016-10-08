import * as _ from 'lodash';

import realm from './realm';

function getNextPlayerId() {
    if (realm.objects('Player').length === 0) {
        return 1;
    }
    return _.chain(realm.objects('Player'))
        .map((p) => p.id)
        .max()
        .value() + 1;
}

const normalize = (player) => ({ ...player });

class Players {
    getAll() {
        return _.values(realm.objects('Player')).map(normalize);
    }

    save(name) {
        return new Promise((success) => {
            realm.write(() => {
                const player = {
                    id: getNextPlayerId(),
                    name
                };
                const savedPlayer = realm.create('Player', player);
                success(normalize(savedPlayer));
            });
        });
    }

    remove(id) {
        return new Promise((success) => {
            realm.write(() => {
                const player = realm.objects('Player').filtered(`id = ${id}`);
                if (player) {
                    realm.delete(player);
                }
                success();
            });
        });
    }
}

export default Players;
