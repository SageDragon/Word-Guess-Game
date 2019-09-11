var answers = ["kitten", "unicorn", "otter", "butterfly", "hedgehog", "puppy", "griffin", "phoenix"]

var randomWord = "";
var theWordArray = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongLetter = [];
var lastWord = "";

var wins = 0;
var losses = 0;
var guessesRemaining = 12;

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.which || evt.keyCode;
    var charStr = String.fromCharCode(charCode);
    if (/[a-z]/i.test(charStr)) {
    }
    else {
        alert("Please pick a charater A-Z");
    }
 }
 

function Game() {
    randomWord = answers[Math.floor(Math.random() * answers.length)];

    theWordArray = randomWord.split("");

    blanks = theWordArray.length;

    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    document.getElementById("gameWord").innerHTML = "  " + blanksAndCorrect.join("  ");

    console.log(randomWord);
    console.log(theWordArray)
    console.log(blanks)
    console.log(blanksAndCorrect)
}

function reset() {
    guessesRemaining = 12;
    wrongLetter = [];
    blanksAndCorrect = [];
    document.getElementById("infoBoard").innerText = "Congrads!!! your word was " + randomWord;
    Game()
}

function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    else {
        wrongLetter.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    if (theWordArray.toString() == blanksAndCorrect.toString()) {
        wins++;
        reset()
        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("losstracker").innerHTML = " " + losses;
        document.getElementById("infoBoard").innerText = "Sorry You Lost!!";
    }
    document.getElementById("gameWord").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}

Game()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);

    document.getElementById("gameLetters").innerHTML = "  " + wrongLetter.join(" ");
}

function reload() {
    location.reload(true)
}

function giveup() {
    losses++;
    reset()
    document.getElementById("losstracker").innerHTML = " " + losses;
    document.getElementById("infoBoard").innerText = "Sorry You Lost!!";


}
