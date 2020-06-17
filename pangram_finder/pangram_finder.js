const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
};

PangramFinder.prototype.phraseToLettersArray = function () {
  const phraseToArray = this.phrase.toLowerCase().split("");
  return phraseToArray.filter((character) => {
    if (this.alphabet.includes(character)) {
      return character
    };
  });
};

PangramFinder.prototype.isPangram = function () {

    return this.alphabet.every((letter) => {
      return this.phraseToLettersArray().includes(letter);
    });
    
  };

module.exports = PangramFinder;
