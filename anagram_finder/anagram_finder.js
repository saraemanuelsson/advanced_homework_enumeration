const AnagramFinder = function (word) {
    this.word = word.split("");
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {

    return otherWords.filter((otherWord) => {
        return otherWord.split("").every((letter) => {
            return this.word.includes(letter);
        });
    });

};

module.exports = AnagramFinder;

