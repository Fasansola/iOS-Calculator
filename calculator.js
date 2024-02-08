// Add event listener for users clicks
let calculator = document.querySelector(".calculator-interface");
let display = document.querySelector(".solution-display");

let tempValue = "0";
let result = '0';

let operator = '';

// Find the keys clicked

const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"]
const operators = ["÷", "×", "-", "+"]
const calFunctions = ["C", "⃪", "="]

calculator.addEventListener('click', function(event) {
    let key = event.target.innerText;

    // listen for numbers clicks
    if (numbers.includes(key)) {
        // if first value is being passed in
        if (operator == '') {
            if (tempValue === '0')
                tempValue = key; 

            else if (tempValue !== '0')
                tempValue += key; 

            result = tempValue;
        }

        // if second value is being passed in
        else {
            if (tempValue === '0')
                tempValue = key; 

            else if (tempValue !== '0')
                tempValue += key; 
        }
    }

    // listens for operators
    if (operators.includes(key)){
        operator = key

        // reset tempValue now that it value has been assigned to result
        tempValue = '0'
    }

    if (calFunctions.includes(key)) {
        if (key === 'C')
            totalReset();

        if (key === "⃪") {
            if (operator === '')
            {
                tempValue = tempValue.slice(0, -1)
                if (tempValue === '')
                    tempValue = '0';

                result = tempValue;
            }

            else {
                tempValue = tempValue.slice(0, -1)
                if (tempValue === '')
                    tempValue = '0';
            }
        }

        if (key === '=') {
            result = compute(tempValue, result, operator);

            if (result.length > 14)
                display.style.fontSize = '24px';

            // console.log(result);
            display.innerText = result; 
            
            // stop program here
            return;
        }
    }

    // output value tempValue to the display
    if (tempValue.length > 14)
        display.style.fontSize = '30px';

    else 
        display.style.fontSize = '45px';
    
    display.innerText = tempValue;
});


// PROJECT FUNCTIONS

// Compute the two numbers tempValue and B
function compute(temp, result, operator) {
    result = +result;
    temp = +temp;

    if (operator === '+')
        result += temp;

    else if (operator === '-')
        result -= temp;

    else if (operator === '×')
        result *= temp;
    
    else if (operator === '÷')
        result /= temp;

    result = result.toString();
    partialReset();

    return result;
}

// Reset everything
totalReset = () => {
    tempValue = "0";
    result = '0';
    operator = '';
}

// partially rest everything
partialReset = () => {
    tempValue = "0";
    operator = '';
}