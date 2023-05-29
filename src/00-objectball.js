function gameObject() {
    const obj = {
        home: {
            teamName: 'Brooklyn Nets', 
            colors: ['black', 'white'], 
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 19,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
            }, 




        },

        away: {
            teamName: 'Charlotte Hornets', 
            colors: 'Turquoise, Purple', 
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 308,
                    shoe: 148,
                    points: 128,
                    rebounds: 128,
                    assists: 128,
                    steals: 38,
                    blocks: 128,
                    slamDunks: 77
                },
                'DeSagna Diop': {
                    number: 117,
                    shoe: 177,
                    points: 177,
                    rebounds: 197,
                    assists: 107,
                    steals: 37,
                    blocks: 17,
                    slamDunks: 1577
                },
                'Ben Gordon': {
                    number: 16,
                    shoe: 196,
                    points: 266,
                    rebounds: 196,
                    assists: 66,
                    steals: 36,
                    blocks: 85,
                    slamDunks: 54
                },
                'Brendan Haywood': {
                    number: 311,
                    shoe: 151,
                    points: 191,
                    rebounds: 22,
                    assists: 23,
                    steals: 43,
                    blocks: 113,
                    slamDunks: 13
                },
            }, 


        }
    }

    return obj; 
}

function homeTeamName() {
    return gameObject()["home"]["teamName"];
  }

function numPointsScored (playerName) {
    const object = gameObject()
    const allPlayers = {...object.home.players, ...object.away.players}
    return allPlayers[playerName].points
   
}

function shoeSize (playerName) {
    const object = gameObject()
    const allPlayers = {...object.home.players, ...object.away.players}
    return allPlayers[playerName].shoe
}

function teamColors4 (nameOfTeam) {
    const object = gameObject()
    if (object.home.teamName === nameOfTeam) {
        return object.home.colors;
      } else if (object.away.teamName === nameOfTeam) {
        return object.away.colors;
      }
    }

function teamNames(){
    const object = gameObject()
    return [object.home.teamName, object.away.teamName ]
}

function playerNumbers(nameOfTeam) {
    const object = gameObject()
    if (object.home.teamName === nameOfTeam) {
        return Object.values(object.home.players).map(player => player.number);
      } else if (object.away.teamName === nameOfTeam) {
        return Object.values(object.away.players).map(player => player.number);
      }

}

function playerStats(playerName) {
    const object = gameObject()
    const allPlayers = {...object.home.players, ...object.away.players}
    for(const player in allPlayers) {
        if(player === playerName){
            return allPlayers[player]
        }
    }
    
}

function bigShoeRebounds() {
    const object = gameObject()
    let largestShoeSize = 0
    let playerWithLargestShoeSize = null

    for(const team in object) {
        for(const player in object[team].players) {
            const shoeSize = object[team].players[player].shoe
            if (shoeSize > largestShoeSize) {
                largestShoeSize = shoeSize
                playerWithLargestShoeSize = player
            }
        }
    }

    if(playerWithLargestShoeSize) {
        return object.home.players[playerWithLargestShoeSize].rebounds
    }

}




  

