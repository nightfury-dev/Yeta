export function addPlayer(name) {
    return {
        type: 'ADD_PLAYER',
        name
    };
}

export function removePlayer(id) {
    return {
        type: 'REMOVE_PLAYER',
        id
    };
}
