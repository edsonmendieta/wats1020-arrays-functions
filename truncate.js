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

// Original truncate words func.

function truncateWords(longText, numWords) { // function that truncates string of words at inputed index value number and outputs remaining words with ellipses to signal truncation.
  longText = String(longText); // Turns first parameter input into a string just in case they input some other value type.
  numWords = Number(numWords); // Turn second parameter input into a number just in case they input some other value type.
  var textArray = longText.split(" "); // Separates text at each whitespace and has no limit on splits.
  textArray.splice(numWords, textArray.length); // splice starts at index value of number type value entered for the numWords parameter and omits everything at and after it.  
  return textArray.join(" ") + "..."; // returns the spliced text with a whitespace at each splice point and "..." added to the last set of characters.
}

// Stretch

// truncate characters func.
// "use strict";
function truncateCharacters(characters, numCharacters) { // function that truncates string of characters at inputed index value number and outputs remaining words with ellipses to signal truncation.
  characters = String(characters); // Turns first parameter input into a string just in case they input some other value type.
  numCharacters = Number(numCharacters); // Turn second parameter input into a number just in case they input some other value type.
  var textArray = characters.split(""); // Separates text after each individual character and has no limit on splits.
  textArray.splice(numCharacters, textArray.length); // splice starts at index value of number type value entered for the numWords parameter and omits everything at and after it.  
  return textArray.join("") + "..."; // returns the spliced text with a whitespace at each splice point and "..." added to the last set of characters.
}

// modified truncate words func.

 function truncateWords(originalText, wordLimit) { // function that truncates string of words at inputed index value number and outputs remaining words with ellipses to signal truncation. Also ouputs orginial text inputed and the word count used for truncation.
  "use strict";
  if (wordLimit == undefined)
    wordLimit = 2; // sets truncation to an index value of 2 if no number is inputted for numWords parameter.
  originalText = String(originalText); // Turns first parameter input into a string just in case they input some other value type.
  wordLimit = Number(wordLimit); // Turns second parameter input into a number just in case they input some other value type.
  var textArray = originalText.split(" "); // Separates text after each individual character and has no limit on splits.
  var originalLength = originalText.split(" ").length; //outputs word count of original string
  textArray.splice(wordLimit, textArray.length); // splice starts at index value of number type value entered for the numWords parameter and omits everything at and after it.
  return { // object containing original inputed text, the word count used for truncation, and the newly trucated text by the function.
    originalText: originalText,
    wordCount: originalLength, // word count of originial string
    numWords: wordLimit,
    shortText: textArray.join(" ") + "..." // output of function
}
}


// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log(truncateWords(originalText, wordLimit))
