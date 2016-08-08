class Player {}
Player.schema = {
    name: 'Player',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string'
    }
};

const realm = new Realm({schema: [Player]});

export default realm;
