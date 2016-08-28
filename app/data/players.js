import * as _ from 'lodash';

import realm from './realm';


class RealmPlayer {
    getPlayers() {
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

    addPlayer(player) {
        realm.write(() => {
            realm.create('Player', player);
        });
    }

    removePlayer(id) {
        realm.write(() => {
            const player = realm.objects('Player').filtered('id = ' + id);
            if (player) {
                realm.delete(player);
            }
        });
    }
}

export default RealmPlayer;
