const games = [
    {
        id: 1,
        timeBegin: new Date(),
        players: [1, 2, 3],
        course: 1,
        scores: {
            1: [4, 4, 4, 3, 3, 3, 3, 3, 4],
            2: [4, 4, 4, 3, 3, 3, 3, 3, 4],
            3: [4, 4, 4, 3, 3, 3, 3, 3, 4]
        },
        currentHole: 1
    },
    {
        id: 2,  
        timeBegin: new Date(),
        players: [1, 3],
        course: 1,
        scores: {
            1: [4, 4, 4, 3, 3, 3, 3, 3, 4],
            3: [4, 4, 4, 3, 3, 3, 3, 3, 4]
        },
        currentHole: 4
    }
];

export default games;
