let counter = document.getElementById("counter");
let likes = {};
let interval
const minusButton = document.getElementById("-");
const plusButton = document.getElementById("+");
const likeButton = document.getElementById("<3");
const ul = document.getElementsByClassName("likes");
const pauseButton = document.getElementById("pause");
const submitButton = document.getElementById("submit");
let comments = document.getElementsByClassName("comments");
let comment = document.querySelector('input');


init()

function init(){
  window.addEventListener('load', startCounter);
  minusButton.addEventListener('click', subtractFromCounter);
  plusButton.addEventListener('click', addToCounter);
  likeButton.addEventListener('click', newLike);
  pauseButton.addEventListener('click', stopCounter);
  submitButton.addEventListener('click', submitComment);
}


function startCounter() {
  interval = setInterval(function() {counter.innerText++}, 1000);
}


function stopCounter() {
  if (pause.innerText === "pause"){
    clearInterval(interval);
    pause.innerText = "resume";
    minusButton.disabled = true;
    plusButton.disabled = true;
    likeButton.disabled = true;
  } else {
    startCounter();
    pause.innerText = "pause"
    minusButton.disabled = false;
    plusButton.disabled = false;
    likeButton.disabled = false;
  }
}

function subtractFromCounter() {
  counter.innerText--;
}

function addToCounter() {
  counter.innerText++;
}

function newLike() {
  if (likes[counter.innerText]){
    likes[counter.innerText]++;
    li = document.getElementById(counter.innerText);
    li.innerText = (counter.innerText + " has been liked " + likes[counter.innerText] + " time(s)")
  } else{
    likes[counter.innerText] = 1
    li = document.createElement("li");
    li.setAttribute("id", counter.innerText);
    li.appendChild(document.createTextNode(counter.innerText + " has been liked " + likes[counter.innerText] + " time(s)"));
    ul[0].appendChild(li);
  }
}

function submitComment(event){
  event.preventDefault()
  li = document.createElement("li");
  li.setAttribute("id", "comment");
  li.appendChild(document.createTextNode(comment.value));
  comments[0].appendChild(li);
  comment.value = "";
}
