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
    let arr = [];
  let letterCounts = {};
  let typedText = getTxt();
  for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];
    letterCounts[currentLetter] === undefined
      ? (letterCounts[currentLetter] = 1)
      : letterCounts[currentLetter]++;
  }
  for (let letter in letterCounts){
    arr.push([letter, letterCounts[letter]]);
}

    arr.sort((a,b)=> b[1]-a[1]);
    return arr;

}

function getWords() {
  let wordCounts = {};
  let arr = [];
  const splitText = getTxt().split(" ");
  for (let i = 0; i < splitText.length; i++) {
    currentLetter = splitText[i];
    wordCounts[currentLetter] === undefined
      ? (wordCounts[currentLetter] = 1)
      : wordCounts[currentLetter]++;
  }
    
    for (let word in wordCounts){
        arr.push([word, wordCounts[word]]);
    }
   
    arr.sort((a,b)=> b[1]-a[1]);
  return arr;
}

function printLetters(letterCounts) {
  for (letter in letterCounts) {
    if (letter !== " ") {
      let span = document.createElement("span");
      let textContent = document.createTextNode(
        `${letterCounts[letter].splice(',').join( ': ')}, `
    );
      span.appendChild(textContent);
      document.getElementById("lettersDiv").appendChild(span);
    }
  }
}
function printWords(wordCounts) {
  for (word in wordCounts) {
    if (word !== " ") {
      let span = document.createElement("span");
      let textContent = document.createTextNode(
        `${wordCounts[word].splice(',').join( ': ')}, `
      );
      span.appendChild(textContent);
      document.getElementById("wordsDiv").appendChild(span);
    }
  }
}
