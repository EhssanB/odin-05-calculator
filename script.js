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

let selectOperation = (calcObj, operation) => {
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
