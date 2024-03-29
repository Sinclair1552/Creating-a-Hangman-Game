// Create an array of words
var words = [
    "chips",
    "crayon",
    "pencil",
    "marker"
  ];

  // Pick a random word
  var word = words[Math.floor(Math.random() * words.length)];

  // Set up the answer array
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }

  var remainingLetters = word.length;
  var guesses = 20;

  // The game loop
  while (remainingLetters > 0 && guesses > 0) {
    // Show the player their progress
    alert(answerArray.join(" "));

    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
      // Exit the game loop
      break;
    } else if (guess.length !== 1) {
      alert("Please enter a single letter.");
    } else {
      guesses--;
      guess = guess.toLowerCase();
      // Update the game state with the guess
      for (var j = 0; j < word.length; j++) {
        if (word[j] === guess && answerArray[j] === "_") {
          answerArray[j] = guess;
          remainingLetters--;
        }
      }
    }
  // The end of the game loop
  }

  // Show the answer and congratulate the player
  alert(answerArray.join(" "));

  if (guesses > 0) {
    alert("Good job! The answer was " + word);
  } else {
    alert("Too bad! The answer was " + word);
  }