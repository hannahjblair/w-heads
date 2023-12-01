//a compare function that compares the blk property of the objects in the players array
function compareByBlk(a, b) {
    return a.blk - b.blk;
  }
//sorts the players by points in ascending order
  players.sort(compareByBlk);
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
document.getElementById("image-container").insertAdjacentHTML("beforeend", pts7);
document.querySelectorAll("img")[6].classList.add("pts-7");

let pts8 = players[7].pic
document.getElementById("image-container").insertAdjacentHTML("beforeend", pts8);
document.querySelectorAll("img")[7].classList.add("pts-8");

let pts9 = players[8].pic
document.getElementById("image-container").insertAdjacentHTML("beforeend", pts9);
document.querySelectorAll("img")[8].classList.add("pts-9");

let pts10 = players[9].pic
document.getElementById("image-container").insertAdjacentHTML("beforeend", pts10);
document.querySelectorAll("img")[9].classList.add("pts-10");