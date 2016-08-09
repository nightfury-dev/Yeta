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

const realm = new Realm({schema: [Player, Hole, Course]});

export default realm;
