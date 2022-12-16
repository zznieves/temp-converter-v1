
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
        // notify user of Error
        alert(e);

    }
}

// helper functions

// converting from Fahrenheit
function convertFromF(startingTemp, finalUnit) {


    // F --> C
    if(finalUnit === 'Celsius') {
        return ((startingTemp - 32) * (5/9));
    }
    // F --> K
    else {
        return ((startingTemp - 32) * (5/9) + 273.15);
    }
}

// converting from Celsius
function convertFromC(startingTemp, finalUnit) {

    // C --> F
    if(finalUnit === 'Fahrenheit'){
        return (startingTemp * (9/5) + 32);
    }
    // C --> K
    else {
        return (Number(startingTemp) + 273.15)
    }
}

// converting from Kelvin
function convertFromK(startingTemp, finalUnit) {

    // K --> F
    if(finalUnit === 'Fahrenheit'){
        return ((startingTemp - 273.15) * (9/5) + 32);
    }
    // K --> C
    else {
        return (startingTemp - 273.15);
    }
}





// format answer to display to user
function formatAnswer(finalTemp, finalUnit) {

    // if finalUnit is °F
    if(finalUnit === 'Fahrenheit') {
        
        return Number(finalTemp).toFixed(2) + ' °F';
    }
    // if finalUnit is °C
    else if(finalUnit === 'Celsius') {

        return Number(finalTemp).toFixed(2) + ' °C'
    }
    // if finalUnit is K
    else {
        
        return Number(finalTemp).toFixed(2) + ' K';
    }
}



// process data
function calculateFinalTemp(startingTemp, startingUnit, finalUnit) {


    // if startingUnit and finalUnit are the same, no calculations required
    if(startingUnit === finalUnit) {
        console.log('same unit');
        return formatAnswer(startingTemp, finalUnit);
    }

    // which formula do we use (what are we converting from)
    switch (startingUnit) {
        case 'Fahrenheit':
            // call to convertFromF helper function
            return formatAnswer(convertFromF(startingTemp, finalUnit), finalUnit);

        case 'Celsius':
            // call to convertFromC helper function
            return formatAnswer(convertFromC(startingTemp, finalUnit), finalUnit);

        default:
            // call to convertFromK helper function
            return formatAnswer(convertFromK(startingTemp, finalUnit), finalUnit);
    }


}




// get user input from HTML elements
function getUserInput() {

    // get user input from elements
    let startingTemp = document.querySelector('#startingTemp').value;
    let startingUnit = document.querySelector('#startingUnit').value;
    let finalUnit = document.querySelector('#finalUnit').value;

    // call to helper function: validate starting temperature
    validate(startingTemp);

    // return all 3 inputs from HTML elements
    return [startingTemp, startingUnit, finalUnit];
    
    
}


// exports to use in other files
export {getUserInput, calculateFinalTemp}