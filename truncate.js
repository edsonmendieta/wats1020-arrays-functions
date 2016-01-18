// This is the file where you will write the Truncate Words function and related code.

// TODO: Create a Function called truncateWords() that accepts two arguments: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)

// TODO: Within the truncateWords() Function, complete the following steps:
// 1. Use the split() function to split the String into an Array
// 2. Use the length attribute to find the number of words in the Array
// 3. Determine how many words should be removed from the String
// 4. Remove those words from the Array
// 5. Add an additional String item to the Array to put an ellipses in: "..."
// 6. Use the join() function to convert the Array back into a String
// 7. Return the truncated String from the Function

Original truncate words func.

function truncateWords(longText, numWords) {
  longText = String(longText);
  numWords = Number(numWords);
  var textArray = longText.split(" ");
  textArray.splice(numWords, textArray.length);
  return textArray.join(" ") + "...";
}

Stretch

truncate characters func.

function truncateCharacters(characters, numCharacters) {
  characters = String(characters);
  numCharacters = Number(numCharacters);
  var textArray = characters.split("");
  textArray.splice(numCharacters, textArray.length);
  return textArray.join("") + "...";
}

modified truncate words func.

 function truncateWords(longText, numWords) {
  if (numWords === undefined)
    numWords = 2;
  longText = String(longText);
  numWords = Number(numWords);
  var textArray = longText.split(" ");
  textArray.splice(numWords, textArray.length);
  var allReturns = {
    originalText:longText,
    wordCount:numWords,
    shortText:textArray.join(" ") + "...",
  }
  return allReturns
}


// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);
