class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.guessInt = null;
    }

    setRange(min, max) {
        this.min=min;
        this.max=max;
    }

    guess() {
        this.guessInt = Math.ceil((this.min + this.max) / 2);
        return this.guessInt;
    }

    lower() {
        this.max=this.guessInt;
        return this.max;
    }

    greater() {
        this.min=this.guessInt;
        return this.min;
    }
}

module.exports = GuessingGame;
