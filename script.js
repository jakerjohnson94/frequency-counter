document.getElementById("countButton").onclick = function() {
  // your code will go here ...

  let typedText = document.getElementById("textInput").value;

  typedText = typedText.toLowerCase();
  // This changes all the letter to lower case.

  typedText = typedText.replace(/[^a-z'\s]+/g, "");
  // This gets rid of all the characters except letters, spaces, and apostrophes.
  // We will learn more about how to use the replace function in an upcoming lesson.
  let letterCounts = {};
  let wordCounts = {};
  const splitText = typedText.split(' ');
  console.log(splitText);

  for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];

    if (letterCounts[currentLetter] === undefined) {
      letterCounts[currentLetter] = 1;
    } else {
      letterCounts[currentLetter]++;
    }
  }
  for (let i = 0; i < splitText.length; i++) {
    currentLetter = splitText[i];

    if (wordCounts[currentLetter] === undefined) {
      wordCounts[currentLetter] = 1;
    } else {
      wordCounts[currentLetter]++;
    }
  }

  for (letter in letterCounts) {
    let span = document.createElement("span");
    let textContent = document.createTextNode(
      '"' + letter + '": ' + letterCounts[letter] + ", "
    );
    span.appendChild(textContent);
    document.getElementById("lettersDiv").appendChild(span);
  }
  for (word in wordCounts) {
    let span = document.createElement("span");
    let textContent = document.createTextNode(
      '"' + word + '": ' + wordCounts[word] + ", "
    );
    span.appendChild(textContent);
    document.getElementById("wordsDiv").appendChild(span);
  }
}