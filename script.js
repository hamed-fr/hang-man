let randomWords = ["think","flover","water","table","sofa"]
let randomItem = "";
let clicked = [];
let result = "";
let mistakes = 0;
function selectRandomItem (){
randomItem = randomWords[Math.floor(Math.random()*randomWords.length)];
document.getElementById("letters").addEventListener("click", buttonHandler)
window.addEventListener("keydown", keyHandler)
}

function setUnderLine (){
let splitWord = randomItem.split("")
let mappedword = splitWord.map(letter => (clicked.indexOf(letter) >=0)? letter : "_")
result = mappedword.join("")
document.getElementById("clue").innerHTML = `<p>${result}</p>`
}

function checkIfWon (){
    if (randomItem === result){
        document.getElementById("gameover").querySelector("p").style.display = "block"
        document.getElementById("image").querySelector("img").src = "assets/winner.png"  
    }
}
function checkIfLost (){
    if (mistakes ===6) {
        document.getElementById("gameover").querySelector("p").style.display = "block"
        document.getElementById("clue").innerHTML = `<p>random word is: ${randomItem}</p>`
    }
}
function updatePic (){
let picup = document.getElementById("image").querySelector("img")
picup.src = `assets/hangman${mistakes}.png`
}
function letterHandler (letter){
    letter = letter.toLowerCase();
clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
document.getElementById(letter.toUpperCase()).className = "used" ;
if (randomItem.indexOf(letter) >=0){
setUnderLine()
checkIfWon()
} else if (randomItem.indexOf(letter) === -1){
mistakes++;
checkIfLost()
updatePic()
}
}
function keyHandler (event){
letterHandler(event.key)
}

function buttonHandler (event){
letterHandler(event.target.id)
}





selectRandomItem()
setUnderLine()