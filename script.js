// Calculator Function Logic

// calcStateObj - Calculator State Object

// 4 Properties

// 1. firstNumber
// 2. SecondNumber
// 3. selectedOperation
// 4. calculationResult

let intiateStateObj = () => {
    return {
        selectedNumbers: [],
        selectedOperation: null,
        calculationResult: 0,
    }
} 

let calcStateObj = intiateStateObj();

// 3 Main Functions

// 1a. storeNumber
    // Accept sanitised input (ints and floats)
    // Store number in state object

let storeNumber = (calcObj, number) => {
    calcObj.selectedNumbers.push(number);
}

// 1b. selectOperation

let storeOperation = (calcObj, operation) => {
    calcObj.selectedOperation = operation
}

// 2. calculateOperation

let calculateOperation = calcObj => {
    let x = calcObj.selectedNumbers[0];
    let y = calcObj.selectedNumbers[1];

    let operation = calcObj.selectedOperation;

    calcObj.calculationResult = operation(x, y)
}

// 2a. add
// 2b. subtract
// 2c. divide
// 2d. multiply

let add = (x, y) => {
    return x + y
}

let subtract = (x,y) => {
    return x - y
}

let divide = (x,y) => {
    return x / y
}

let multiply = (x,y) => {
    return x * y
}

// DOM Logic

// DOM variables

let calcDisplay = document.querySelector(".display");
let numberNodeList = document.querySelectorAll(".number");
let operatorNodeList = document.querySelectorAll(".operator");

let clearBtn = document.querySelector(".clear");

// Displaying Numbers

let displayInputNumber = e => {

    if (e.type == "click") {
        calcDisplay.textContent += e.target.textContent;
    }

    if (e.type == "keydown") {
        calcDisplay.textContent += e.key;
    }

}

let numberKeyInput = e => {

    let numberString = "1234567890.";
    if (numberString.includes(e.key)) displayInputNumber(e);
    
}

// Clearing display

let clearDisplay = () => {

    calcDisplay.textContent = "";

}

let backSpaceDelete = (e) => {

    if (e.code == "Backspace") {
        calcDisplay.textContent = calcDisplay.textContent.slice(0, -1);
    }

}

// Event Listeners

numberNodeList.forEach(

    numberDiv => numberDiv.addEventListener("click", displayInputNumber)
    
);

addEventListener("keydown", e => {

    numberKeyInput(e);
    backSpaceDelete(e);

})

clearBtn.addEventListener("click", clearDisplay);