class Player {}
Player.schema = {
    name: 'Player',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string'
    }
};

class Hole {}
Hole.schema = {
    name: 'Hole',
    primaryKey: 'id',
    properties: {
        id: 'int',
        holenumber: 'int',
        par: 'int'
    }
};

class Course {}
Course.schema = {
    name: 'Course',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        holes: {type: 'list', objectType: 'Hole'}
    }
};

class Score {}
Score.schema = {
    name: 'Score',
    primaryKey: 'id',
    properties: {
        id: 'int',
        hole: {type: 'Hole'},
        player: {type: 'Player'},
        score: 'int'
    }
};

class Game {}
Game.schema = {
    name: 'Game',
    primaryKey: 'id',
    properties: {
        id: 'int',
        timeBegin: {type: 'date', default: new Date()},
        players: {type: 'list', objectType: 'Player'},
        course: {type: 'Course'},
        currentHole: {type: 'int', default: 1},
        scores: {type: 'list', objectType: 'Score'}
    }
};

const realm = new Realm({schema: [Player, Hole, Course, Score, Game]});

// realm.write(() => { realm.deleteAll(); });

export default realm;
