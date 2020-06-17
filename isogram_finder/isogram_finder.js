const IsogramFinder = function (word) {
    this.word = word
}

IsogramFinder.prototype.wordToCharactersArray = function() {
    return this.word.toLowerCase().split("");
};

IsogramFinder.prototype.isIsogram = function () {
    
    return this.wordToCharactersArray().every((character, i, array) => {
        return (array.indexOf(character) === i)
    });

};

module.exports = IsogramFinder;
