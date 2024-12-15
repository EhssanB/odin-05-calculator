// Variables

let numberArray = [];
let activeOperation;
let calculationResult = 0;
let isOperationActive = false;
let isSecondClear = false;

let operationsObject = {
    add(x,y) {
        return Number(x) + Number(y)
    },

    subtract(x,y) {
        return Number(x) - Number(y)
    },

    multiply(x,y) {
        return Number(x) * Number(y)
    },

    divide(x,y) {
        return Number(x) / Number(y)
    }
}

// calculator function logic 

let calculateOperation = (numberArray, activeOperation) => {
    let number1 = numberArray[0];
    let number2 = numberArray[1];

    let operation = operationsObject[activeOperation];

    return operation(number1, number2);
}

// DOM logic

// DOM elements

let calcDisplay = document.querySelector(".display");

let clearBtn = document.querySelector(".clear");
let signBtn = document.querySelector(".sign");
let percentBtn = document.querySelector(".percent");

let numberList = document.querySelectorAll(".number");
let operatorList = document.querySelectorAll(".operator");

let equalBtn = document.querySelector(".equal");

// DOM functions

// Display Numbers

let displayNumber = e => {

    if (isOperationActive) {
        clearDisplay();
        isOperationActive = false;
    }

    let numberInput = e.target.textContent;
    calcDisplay.textContent += numberInput;
};
numberList.forEach(number => number.addEventListener("click", displayNumber));

// Clear Display

let allClear = () => {
    numberArray = [];
    activeOperation = false;

    let activeOpElement = document.querySelector(".active-op");
    activeOpElement.classList.remove("active-op");

}

let clearDisplay = e => {
    calcDisplay.textContent = "";
}

clearBtn.addEventListener("click", () => {
    
    if (isSecondClear && activeOperation) {
        allClear();
        isSecondClear = false;
    } else {
        isSecondClear = true;
    }

    clearDisplay()

});

// Select Operation 

let storeOperation = e => {
    let currentNumber = calcDisplay.textContent;
    let selectedOperation = e.target.id;

    // If an operation has already been selected, do nothing
    if (activeOperation) {
        continueCalculation(currentNumber, e);
        return
    }
    // if an operation hasn't been selected:   
        // store number on display and selected operation in variables
    numberArray.push(currentNumber);
    activeOperation =  selectedOperation;
    isOperationActive = true;

    e.target.classList.add('active-op');
}

operatorList.forEach(operator => operator.addEventListener("click", storeOperation));

// Calculate Operation

let returnCalculation = e => {

    if (!activeOperation) return;

    // Caputure Number
    let currentNumber = calcDisplay.textContent;
    numberArray.push(currentNumber)

    calculationResult = calculateOperation(numberArray, activeOperation);
    calcDisplay.textContent = calculationResult;

    // Reset Variables
    allClear();

    // Ensure that display is cleared when user enters new number
    isOperationActive = true;
}

let continueCalculation = (number, newOperationDom) => {
    numberArray.push(number);
    let result = calculateOperation(numberArray, activeOperation);

    calcDisplay.textContent = result;

    numberArray = [result];
    activeOperation = newOperationDom.target.id;

    let oldOperationElement = document.querySelector(".active-op");
    oldOperationElement.classList.remove('active-op');

    newOperationDom.target.classList.add("active-op");
}

equalBtn.addEventListener("click", returnCalculation)

// When User Enters Number:
    // Store number in array
    // Display number



/* numberArray.push(
    prompt("enter first number")
)

selectedOperation = prompt("enter operation")

numberArray.push(
    prompt("enter second number")
)

calculationResult = calculateOperation(numberArray, selectedOperation); */

/* console.log(`The result of the calculation:
       Number 1: ${numberArray[0]},
       Number 2: ${numberArray[1]},
       Operation: ${selectedOperation},
       Result: ${calculationResult}`)
    */