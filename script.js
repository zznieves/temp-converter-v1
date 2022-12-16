// import module to use functions
import { getUserInput, calculateFinalTemp } from "./modules/functions.js";


// Step #1: get user input
// calculate function
function calculate() {

    // get user input from elements and validate data
    let input = getUserInput();

    let finalTemp = calculateFinalTemp(input[0], input[1], input[2]);
}



// add eventListener to 'Convert'/Submit button
let submitBtn = document.querySelector('input[value=Convert]');
submitBtn.addEventListener('click', calculate);