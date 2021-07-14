/*The Odin Project -- Game Jam 2021
    SquidSquad
    coderlore
    iketaco
    AqueousOtter
    Game Specs:
        Random word is chosen and characters are randomly jumbled
        Word is presented to player
        Player mixes the letter
        If the player’s word is equal to the original word, the win/get a point
        If the player’s word is NOT equal to the original word, the lose/lose one chance or heart
*/

//global varibles
const secondGradeList1 = ["gravity", "orbit", "space", "earth", "travel", "solar", "planet", "shuttle", "launch", "universe"];
const thirdGradeList1 = ["observe", "distant", "solution", "approach", "saturn", "jupiter", "atmosphere", "intelligent", "theory", "globe"];
const fourthGradeList1 = ["accurate", "extraordinary", "peculiar", "peculiar", "surface", "impact", "descend", "millennium", "century", "frontier"];

let gamemode = "Word Scramble";
let grademode = "Pre-K";
let musicvar = "on";

let userScore;
let highScore; //to be set by gameplay/loaded from previous plays.

//main game functions

//choose random element from chosen array
let newWord = secondGradeList1[Math.floor(Math.random() * secondGradeList1.length)];
console.log(newWord);

//shuffles word
function shuffle(word) {
    let wordArr = [];
    let randomArr = []; 
    for (i = 0; i < word.length; i++) {
        wordArr.push(word[i]);
    }
    for (j = 0; j < word.length; j++) {
        let random = Math.floor(Math.random() * wordArr.length);
        randomArr.push(wordArr[random]);
        wordArr.splice(random,1);
    }
    console.log(randomArr);
}

shuffle(newWord);

//main game logic

//local storage function for scores
function updateHighScore(userScore){
    let oldScore = localStorage.getItem("userHighScore");
    if (oldScore < userScore){
        localStorage.setItem("userHighScore", userScore);
    }
}
//events to run when DOM loaded
document.addEventListener("DOMContentLoaded", ()=>{

    //checks for previous high score, sets to 0 if none, sets highscore to stored highscore otherwise.
    if(localStorage.length == 0){
        localStorage.setItem("userHighScore", 0);
    }
    else{
        highScore = localStorage.getItem("userHighScore");
    }
})

//For HomePage, switching between Modes and Grade Level
let modebutton = document.getElementById('modebutton');
let mainoverlay = document.getElementById('options');
let modes = document.getElementById('modesoptions');
let backbutton1 = document.getElementById('back1');

let gradesbutton = document.getElementById('gradebutton');
let grades = document.getElementById('gradeoptions');
let backbutton2 = document.getElementById('back2');

let modetext = document.getElementById('modesetting');
let gradetext = document.getElementById('gradesetting');

modebutton.addEventListener('click', function() {
        modes.style.display = 'block';
        mainoverlay.style.display = 'none';
        gradetext.style.display = 'none';
  }, false);

  backbutton1.addEventListener('click', function() {
      mainoverlay.style.display = 'block';
      gradetext.style.display = 'block';
      modes.style.display = 'none';
  }, false);

gradesbutton.addEventListener('click', function() {
    grades.style.display = 'block';
    mainoverlay.style.display = 'none';
    modetext.style.display = 'none';
}, false);

backbutton2.addEventListener('click', function() {
    mainoverlay.style.display = 'block';
    modetext.style.display = 'block';
    grades.style.display = 'none';
}, false);

function gamehighlight(){
    document.getElementById(gamemode).style.backgroundColor="white";
    document.getElementById(gamemode).style.color="black";
}

function gradehighlight(){
    document.getElementById(grademode).style.backgroundColor="white";
    document.getElementById(grademode).style.color="black";
}

function mode(currentID){
    if (currentID !== gamemode){
        document.getElementById(currentID).style.backgroundColor="white";
        document.getElementById(currentID).style.color="black";
        document.getElementById(gamemode).style.backgroundColor="black";
        document.getElementById(gamemode).style.color="white";
    }
    gamemode = currentID;
    document.getElementById("modesetting").textContent="Mode: " + gamemode;
}

function gradelevel(currentID){
    if (currentID !== grademode){
        document.getElementById(currentID).style.backgroundColor="white";
        document.getElementById(currentID).style.color="black";
        document.getElementById(grademode).style.backgroundColor="black";
        document.getElementById(grademode).style.color="white";
    }
    grademode = currentID;
    document.getElementById("gradesetting").textContent="Grade: " + grademode;
}

function music(){
    if (musicvar === "on"){
        document.getElementById("backgroundsound").pause();
        document.getElementById("pauser").style.display="block";
        document.getElementById("player").style.display="none";
        musicvar = "off"
    }
    else {
        document.getElementById("backgroundsound").play();
        document.getElementById("player").style.display="block";
        document.getElementById("pauser").style.display="none";
        musicvar = "on"
    }
}

function rulesdisplay(){
    document.getElementById("main").style.display="none";
    document.getElementById("footervalues").style.display="none";
    document.getElementById("login").style.display="none";
    document.getElementById("headermenu").style.display="none";

    document.getElementById("rules").style.display="block";
}

function logindisplay(){
    document.getElementById("main").style.display="none";
    document.getElementById("footervalues").style.display="none";
    document.getElementById("rules").style.display="none";
    document.getElementById("headermenu").style.display="none";

    document.getElementById("login").style.display="block";
}

function backwards(){
    document.getElementById("main").style.display="block";
    document.getElementById("footervalues").style.display="block";
    document.getElementById("headermenu").style.display="flex";

    document.getElementById("rules").style.display="none";
    document.getElementById("login").style.display="none";
}