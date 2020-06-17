const AnagramFinder = function (word) {
    this.word = word.split("");
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {

    const foundWords = otherWords.filter((otherWord) => {
      return otherWord.split("").sort().join(',') == this.word.sort().join(',');
    });
    
    return foundWords;

};




module.exports = AnagramFinder;

// for otherWord in otherWords:
// filter if sorted array of letters is equal to sorted array of letters