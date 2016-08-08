import * as _ from 'lodash';

import realm from './realm';


function getPlayers() {
    return _.values(realm.objects('Player'));
}

function getNextPlayerId() {
    return _.chain(realm.objects('Player'))
        .map((p) => p.id)
        .max()
        .value() + 1;
}

function addPlayer(player) {
    realm.write(() => {
        realm.create('Player', player);
    });
}

function removePlayer(id) {
    realm.write(() => {
        const player = realm.objects('Player').filtered('id = ' + id);
        if (player) {
            realm.delete(player);
        }
    });
}

export { addPlayer, getNextPlayerId, getPlayers, removePlayer };
