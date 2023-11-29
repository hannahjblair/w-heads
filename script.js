
let players = [
    {
        "name": "Breanna Stewart",
        "pts": 23.0,
        "reb": 9.3,
        "blk": 1.6,
        "pic": "<img src=./img/stewie.png>",
        "votes": 0
    },

    {
        "name": "Arike",
        "pts": 21.2,
        "reb": 3.4,
        "blk": .1,
        "pic": "<img src=./img/arike.png>",
        "votes": 0
    },

    {
        "name": "Brittney Griner",
        "pts": 17.7,
        "reb": 6.3,
        "blk": 1.6,
        "pic": "<img src=./img/BG.png>",
        "votes": 0
    },

    {
        "name": "Chelsea Grey",
        "pts": 15.3,
        "reb": 4.0,
        "blk": .6,
        "pic": "<img src=./img/chelseagrey.png>",
        "votes": 0
    },

    {
        "name": "Jewell",
        "pts": 35.4,
        "reb": 4.7,
        "blk": .4,
        "pic": "<img src=./img/jewell.png>",
        "votes": 0
    },

    {
        "name": "Aliyah",
        "pts": 14.5,
        "reb": 8.4,
        "blk": 1.3,
        "pic": "<img src=./img/jewell.png>",
        "votes": 0
    },

    {
        "name": "T Cloud",
        "pts": 12.7,
        "reb": 3.7,
        "blk": .3,
        "pic": "<img src=./img/jewell.png>",
        "votes": 0
    },

    {
        "name": "Jewell",
        "pts": 35.4,
        "reb": 4.7,
        "blk": .4,
        "pic": "<img src=./img/jewell.png>",
        "votes": 0
    },

    {
        "name": "Kah",
        "pts": 18.7,
        "reb": 4.4,
        "blk": .3,
        "pic": "<img src=./img/jewell.png>",
        "votes": 0
    },

    {
        "name": "Satou",
        "pts": 18.6,
        "reb": 8.1,
        "blk": .4,
        "pic": "<img src=./img/jewell.png>",
        "votes": 0
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

let pts6 = players[5].pic
document.getElementById("image-container").insertAdjacentHTML("beforeend", pts6);
document.querySelectorAll("img")[5].classList.add("pts-6");

let pts7 = players[6].pic
document.getElementById("image-container").insertAdjacentHTML("beforeend", pts6);
document.querySelectorAll("img")[6].classList.add("pts-7");

let pts8 = players[7].pic
document.getElementById("image-container").insertAdjacentHTML("beforeend", pts6);
document.querySelectorAll("img")[7].classList.add("pts-8");

let pts9 = players[8].pic
document.getElementById("image-container").insertAdjacentHTML("beforeend", pts6);
document.querySelectorAll("img")[8].classList.add("pts-9");

let pts10 = players[9].pic
document.getElementById("image-container").insertAdjacentHTML("beforeend", pts6);
document.querySelectorAll("img")[9].classList.add("pts-10");


//puts random dog image from API in api-container
async function fetchParagraph() {
    const result = await fetch("https://dog.ceo/api/breeds/image/random");
    const resultJson = await result.json();
    // console.log(resultJson.message);
    const dogContainer = document.getElementById("api-container");
    let html = `<img src='${resultJson.message}' alt='random dog'>`
    dogContainer.insertAdjacentHTML("afterbegin", html);
}

fetchParagraph();


// shows image-container when pts is selected from menu
function showPoints() {
    document.getElementById("image-container").style.display = "flex";
  }
  document.getElementById("ptsBtn").addEventListener("click", showPoints);

// shows fan-choice when pts is selected from menu
function showFansChoice() {
    document.getElementById("fan-choice").style.display = "flex";
  }
  document.getElementById("fanBtn").addEventListener("click", showFansChoice);

//shows api-container when Backup API is chosen from menu
function showAPI() {
    document.getElementById("api-container").style.display = "flex";
  }
  document.getElementById("apiBtn").addEventListener("click", showAPI);



// keeps the divs from other topics from showing while  fan's choice is selected
function noShow() {
        document.getElementById("image-container").style.display = "none";
        document.getElementById("api-container").style.display = "none";
}
document.getElementById("fanBtn").addEventListener("click", noShow);

// keeps the divs from other topics from showing while pts is selected
function noShowPts() {
    document.getElementById("fan-choice").style.display = "none";
    document.getElementById("api-container").style.display = "none";
}
document.getElementById("ptsBtn").addEventListener("click", noShowPts);

// keeps the divs from other topics from showing while Backup API is selected
function noShowAPI() {
    document.getElementById("fan-choice").style.display = "none";
    document.getElementById("image-container").style.display = "none";
}
document.getElementById("apiBtn").addEventListener("click", noShowAPI);