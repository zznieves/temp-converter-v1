// import module to use functions
import { getUserInput, calculateFinalTemp } from "./modules/functions.js";


// Step #1: get user input
// calculate function
function calculate() {

    // get user input from elements and validate data
    let input = getUserInput();


    // if an Error was thrown for invalid input (startingTemp) stop the current process
    if(input[0] === '') {
        return;
    }

    // calculate final temperature
    let finalTemp = calculateFinalTemp(input[0], input[1], input[2]);
    
    // display result to user
    let outputBox = document.querySelector('#finalTemp');
    outputBox.value = finalTemp;
}



// add eventListener to 'Convert'/Submit button
let submitBtn = document.querySelector('input[value=Convert]');
submitBtn.addEventListener('click', calculate);