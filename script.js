
let players = [
    {
        "name": "Stewie",
        "pts": 23.0,
        "reb": 9.3,
        "blk": 1.6,
        "pic": "<img src=./img/stewie.png>"
    },

    {
        "name": "Arike",
        "pts": 21.2,
        "reb": 3.4,
        "blk": .1,
        "pic": "<img src=./img/arike.png>"
    },

    {
        "name": "BG",
        "pts": 17.7,
        "reb": 6.3,
        "blk": 1.6,
        "pic": "<img src=./img/BG.png>"
    },

    {
        "name": "Chelsea Grey",
        "pts": 15.3,
        "reb": 4.0,
        "blk": .6,
        "pic": "<img src=./img/chelseagrey.png>"
    },

    {
        "name": "Jewell",
        "pts": 35.4,
        "reb": 4.7,
        "blk": .4,
        "pic": "<img src=./img/jewell.png>"
    }
]

//a compare function that compares the pts property of the objects in the players array
function compareByPts(a, b) {
    return a.pts - b.pts;
  }
//sorts the players by points in ascending order
  players.sort(compareByPts);
//reverses the order of the players so they are sorted in descending order
  players.reverse();

