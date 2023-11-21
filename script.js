
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

//adds img of pplayer w highest points to image-container
let pts1 = players[0].pic
document.getElementById("image-container").insertAdjacentHTML("beforeend", pts1);
//adds class pts-1 to the image of player with highest points
document.querySelector("img").classList.add("pts-1");

let pts2 = players[1].pic
document.getElementById("image-container").insertAdjacentHTML("beforeend", pts2);
document.querySelectorAll("img")[1].classList.add("pts-2");

let pts3 = players[2].pic
document.getElementById("image-container").insertAdjacentHTML("beforeend", pts3);
document.querySelectorAll("img")[2].classList.add("pts-3");

let pts4 = players[3].pic
document.getElementById("image-container").insertAdjacentHTML("beforeend", pts4);
document.querySelectorAll("img")[3].classList.add("pts-4");

let pts5 = players[4].pic
document.getElementById("image-container").insertAdjacentHTML("beforeend", pts5);
document.querySelectorAll("img")[4].classList.add("pts-5");

// shows image-container when pts is selected from menu
function showPoints() {
    document.getElementById("image-container").style.display = "flex";
  }
  document.getElementById("ptsBtn").addEventListener("click", showPoints);

  