// HTML Elements to interact with
const userInput = document.querySelector("#userInput");
const guessBtn = document.querySelector("#guessBtn");
const icon = document.querySelector("#icon");
const guage = document.querySelector("#guage");
const previousGuessDiv = document.querySelector("#previousGuesses");

// Global variables
const secretNumber = Math.floor(Math.random() * 100) + 1;
console.log(`The secret # is ${secretNumber}`);
let numberOfGuesses = 0;

// Check the user guess by adding an event listener to
// the guess button
guessBtn.addEventListener("click", function(){
    //grab the number from the input box
    const guess = Number(userInput.value);

    if(guess === secretNumber){
        // guessed correctly
        icon.textContent = "Way to go!!!! You were correct!!!! :)";
        icon.style.color = "green";
        guessBtn.disabled = true;
        userInput.disabled = true;
    } else{
        // guessed wrong
        icon.textContent = "Nope! Try again!!!";
        icon.style.color = "red";
        userInput.value = ""; //clear out the input box
        userInput.focus(); // put cursor back in the box

        // update previous guesses
        previousGuessDiv.innerHTML += `<p>${guess}</p>`;

        console.log(`Your guess of ${guess} is wrong!!!`);
    }

}); //end of eventListener




