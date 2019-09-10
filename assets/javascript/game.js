var answers = ["kitten", "unicorn", "otter", "butterfly", "hedgehog", "puppy", "griffin", "phoenix"]

var randomWord = "";
var theWordArray = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongLetter = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 9;



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
    guessesRemaining = 9;
    wrongLetter = [];
    blanksAndCorrect = [];
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



