const games = [
    {
        id: 1,
        timeBegin: new Date(),
        players: [1, 2, 3],
        course: 1,
        scores: {
            1: [4, 4, 4, 4],
            2: [3, 3, 3, 3],
            3: [5, 5, 5, 5]
        },
        currentHole: 1
    },
    {
        id: 2,  
        timeBegin: new Date(),
        players: [1, 3],
        course: 1,
        scores: {
            1: [1, 3, 3, 3],
            3: [2, 3, 4, 4]
        },
        currentHole: 4
    }
];

export default games;
