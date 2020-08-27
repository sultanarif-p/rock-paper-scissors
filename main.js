
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
 if( userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput === 'bomb') {
   return userInput; 
 } else {
   console.log('Error!');
 }
};

 function getComputerChoice(){
   let randomNumber = Math.floor(Math.random() *3);
    switch(randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }

 
function determineWinner(userChoice, computerChoice){
  if(userChoice === 'bomb'){
    return "You are the bomb and won."
  }
  if(userChoice === computerChoice){
    return "The game was a tie";
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The computer won.';
    } else {
      return 'You won';
    }//end else
    }//end if userchoice = rock
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors' || computerChoice === 'rock'){
        return 'The computer won';
      } else {
        return 'You won';
      }//end else
    }//end if userchoice = paper
 if(userChoice === 'scissors'){
      if(computerChoice === 'rock' || computerChoice === 'paper'){
        return 'The computer won';
      } else {
        return 'You won';
      }//end else
    }//end if userchoice = paper
}
const playGame = () => {
  const userChoice = getUserChoice( 'bomb');
  console.log(userChoice);
  const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
console.log(determineWinner(userChoice, computerChoice));
};
playGame();




 
