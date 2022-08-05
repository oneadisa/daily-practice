const team = {
    _players: [
        { firstName: "Pete", lastName: "Wheeler", age: 54 },
        { firstName: "George", lastName: "Wher", age: 57 },
        { firstName: "Paul", lastName: "Wheelie", age: 24 },
    ],
    _games: [
        { opponent: "MCFC", teamPoints: 60, opponentPoints: 12 },
        { opponent: "WHFC", teamPoints: 40, opponentPoints: 22 },
        { opponent: "MUFC", teamPoints: 50, opponentPoints: 17 },
    ],

    get players () {
        return this._players;
    },

    get games () {
        return this._games;
    },
    addPlayer (newFirstName, newLastName, newAge) {
        const player = {
            newFirstName,
            newLastName,
            newAge,
        };
        this._players.push(player);
    },

    addGame (newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
            newOpponent,
            newTeamPoints,
            newOpponentPoints,
        };
        this._games.push(game);
    },
};

team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);
console.log(team._players);
console.log(team._games);
