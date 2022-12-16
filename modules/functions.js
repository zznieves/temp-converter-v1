
// helper function: validate input (starting temperature)
function validate(startingTemp) {

    let value = String(startingTemp);

    // if input is invalid throw an Error
    try {
        
        /*
        * Input box allows user to place (-) and (+) signs at the same time. Returns as an empty String '' when printed to console.
        * Input box allows user to place (-) and (+) signs at the end of the value. Returns as an empty String  '' when printed to console.
        */
        if(value === '') {
            throw Error(`Invalid input: Please check for 1 of the following errors.

            1. No value was given for input.
            2. There was a (+) and (-) sign in the input at the same time.
            3. There was a (+) or (-) sign at the end of the value.`);
        }
    }
    catch(e) {
        // notify user of Error and stop code from current cycle
        alert(e);
    }
}

// process data
function calculateFinalTemp(startingTemp, startingUnit, finalUnit) {

    // which formula do we use (what are we converting from and to)


}

// get user input from HTML elements
function getUserInput() {

    // get user input from elements
    let startingTemp = document.querySelector('#startingTemp').value;
    let startingUnit = document.querySelector('#startingUnit').value;
    let finalUnit = document.querySelector('#finalUnit').value;

    // call to helper function: validate starting temperature
    validate(startingTemp);

    // input is valid, return data to caller
    return [startingTemp, startingUnit, finalUnit];
    
    
}


// exports to use in other files
export {getUserInput, calculateFinalTemp}