function reverseWords(sentence) {
    const words = sentence.split(" ");
    const reversedWords = words.map(word => word.split("").reverse().join(""));
    return reversedWords.join(" ");
  }
  
  const reversedSentence = reverseWords("This is a sunny day");
  console.log(reversedSentence); // shiT si a ynnus yad
  