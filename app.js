let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {

   const options = ["rock", "paper", "scissor"]; 
   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx];

};

const drawGame = () => {
    console.log("game was draw.");
};

const showWinner = (userWin) => {
    if(userWin){
        console.log("you win!");
    }else{
        console.log("you lose");
    }
};

const playGame =(userChoice) => {
    console.log("user choice =-", userChoice);
    //Generate computer choice=> modular functinality->thats mean reuseabale component 

    const compChoice = genCompChoice();
    console.log("Computer choice =-", compChoice);


    if(userChoice === compChoice){
        //draw game

        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //SESSORE ,PAPER
            userWin = compChoice === "paper" ? false : true;
            //if computer chose papar so user failed and comp chose scissore so use win

        }else if(userChoice === "paper"){
            //computer choises =rock, scissors
            userWin = true;
            userWin = compChoice === "scissors" ? false : true; 
        }else{

         userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{

        const userChoice = choice.getAttribute("id");
      //  console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});