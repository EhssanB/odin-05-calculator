// Calculator Function Logic

// calcStateObj - Calculator State Object

// 4 Properties

// 1. firstNumber
// 2. SecondNumber
// 3. selectedOperation
// 4. calculationResult

let intiateStateObj = () => {
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
    
    return {
        selectedNumbers: [],
        selectedOperation: null,
        calculationResult: 0,
        isAfterOperation: false,
        add,
        subtract,
        divide,
        multiply
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
    calcObj.selectedOperation = calcObj[operation];
}

// 2. calculateOperation

let calculateOperation = calcObj => {
    let x = calcObj.selectedNumbers[0];
    let y = calcObj.selectedNumbers[1];

    let operation = calcObj.selectedOperation;

    let result = operation(x,y);

    calcObj.calculationResult = result
    calcObj.selectedNumbers = [result];
}

// 2a. add
// 2b. subtract
// 2c. divide
// 2d. multiply

// DOM Logic

// DOM variables

let calcDisplay = document.querySelector(".display");

let numberNodeList = document.querySelectorAll(".number");
let operatorNodeList = document.querySelectorAll(".operator");

let clearBtn = document.querySelector(".clear");

// Displaying Numbers

let displayInputNumber = e => {

    if(calcStateObj.isAfterOperation) {
        console.log("Number input has come after selecting operation")
        clearDisplay();
        calcStateObj.isAfterOperation = false;
    }

    if (e.type == "click") {
        calcDisplay.textContent += e.target.textContent;
    }

    if (e.type == "keydown") {
        calcDisplay.textContent += e.key;
    }

}

let numberKeyInput = e => {

    if (e.code == "Period" && calcDisplay.textContent.includes(".")) return

    let numberString = "1234567890.";
    if (numberString.includes(e.key)) displayInputNumber(e);

    console.log(e)
    
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

// Operators:



let storeInput = e => {

    let selectedNumber = parseFloat(calcDisplay.textContent);
    let selectedOperation = e.target.id;

    if (calcStateObj.selectedOperation) {
        
        storeNumber(calcStateObj, selectedNumber);
        calculateOperation(calcStateObj);

        storeOperation(calcStateObj, selectedOperation);

        calcDisplay.textContent = calcStateObj.calculationResult;
        
    } else {
        
        storeNumber(calcStateObj, selectedNumber);
        storeOperation(calcStateObj, selectedOperation);

    }

    calcStateObj.isAfterOperation = true;
   
}

operatorNodeList.forEach( operator => {
    
    operator.addEventListener("click", storeInput)

} )

