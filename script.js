const game ={
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    previousGuesses: [],
   
    play: function(){
      this.setSecretNum();
      this.promptUser();
    },
    
    setSecretNum: function(){
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    },
  
    promptUser: function(){
      const guess = this.getGuess();
      this.storeGuess(guess);
      this.checkGuess(guess);
    },
    
    getGuess: function(){
      const guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`);
      return parseInt(guess);
    },
  
    storeGuess: function(guess){
      this.previousGuesses.push(guess);
    },
    
    checkGuess: function(guess){
      if (guess === this.secretNum){
        this.onCorrectGuess();
      } else {
        this.onIncorrectGuess(guess);
      };
    },
   
    onCorrectGuess: function(){
      this.render(`Congrats! You guessed the number in ${this.previousGuesses.length} guesses!!`);
    },
  
    onIncorrectGuess: function(guess){
      this.render(`Your guess is too ${this.getHighOrLow(guess)}
      Previous guesses: ${this.previousGuesses}`)
      this.promptUser();
    },
  
    getHighOrLow: function(guess){
      return guess < this.secretNum ? "low": "high";
    },
  
    render: function(content){
      window.alert(content);
    }
  }
  
  game.play();
  