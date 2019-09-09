var answers = ["kitten", "unicorn", "rainbow", "butterfly"];

var theWord = answers[Math.floor(Math.random() * answers.length)];

var theWordArray =[];

for (var i = 0; i < theWord.length; i++){
    theWordArray[i] = "_";
}

var lettersRemain = theWord.length;