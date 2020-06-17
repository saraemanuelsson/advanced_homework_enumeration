const IsogramFinder = function (word) {
    this.word = word
}

IsogramFinder.prototype.wordToCharactersArray = function() {
    return this.word.toLowerCase().split("");
};

IsogramFinder.prototype.isIsogram = function () {

}

module.exports = IsogramFinder;
