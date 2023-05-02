function CapitalizeEachWord(text) {
    // Split the string into a list of words
    const words = text.split(' ');
    
    // Capitalize the first letter of each word and make the rest lowercase
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    
    // Join the capitalized words back into a string
    const capitalizedText = capitalizedWords.join(' ');
    
    return capitalizedText;
  }
  