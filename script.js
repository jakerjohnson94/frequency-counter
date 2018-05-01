document.getElementById("countButton").onclick = function() {
  document.getElementById("wordsDiv").textContent = "";
  document.getElementById("lettersDiv").textContent = "";

  printWords(getWords());
  printLetters(getLetters());
};

function getTxt() {
  let typedText = document.getElementById("textInput").value;
  typedText = typedText.toLowerCase();
  // This changes all the letter to lower case.
  return typedText.replace(/[^a-z'\s]+/g, "");
  // This gets rid of all the characters except letters, spaces, and apostrophes.
  // We will learn more about how to use the replace function in an upcoming lesson.
}
function getLetters() {
  let letterCounts = {};
  let typedText = getTxt();
  for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];
    letterCounts[currentLetter] === undefined
      ? (letterCounts[currentLetter] = 1)
      : letterCounts[currentLetter]++;
  }
  return letterCounts;
}

function getWords() {
  let wordCounts = {};
  const splitText = getTxt().split(" ");
  for (let i = 0; i < splitText.length; i++) {
    currentLetter = splitText[i];
    wordCounts[currentLetter] === undefined
      ? (wordCounts[currentLetter] = 1)
      : wordCounts[currentLetter]++;
  }
  return wordCounts;
}

function printLetters(letterCounts) {
  for (letter in letterCounts) {
    if (letter !== "") {
      let span = document.createElement("span");
      let textContent = document.createTextNode(
        '"' + letter + '": ' + letterCounts[letter] + ", "
      );
      span.appendChild(textContent);
      document.getElementById("lettersDiv").appendChild(span);
    }
  }
}
function printWords(wordCounts) {
  for (word in wordCounts) {
    if (word !== "") {
      let span = document.createElement("span");
      let textContent = document.createTextNode(
        `"${word}":${wordCounts[word]}  ,`
      );
      span.appendChild(textContent);
      document.getElementById("wordsDiv").appendChild(span);
    }
  }
}
