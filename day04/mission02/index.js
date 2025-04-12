const firstNumberInput = document.getElementById('num1');
const secondNumberInput = document.getElementById('num2');
const buttons = document.querySelectorAll('button');
const resultNumber = document.getElementById('result');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        let firstNum = parseFloat(firstNumberInput.value);
        let secondNum = parseFloat(secondNumberInput.value);
        let operator = e.target.value;

        conditionOfCalculation(firstNum, secondNum) ?
            calculate(firstNum, secondNum, operator) : isNotNumberNotice();
    });
});

function conditionOfCalculation(firstNum, secondNum) {
    return !isNaN(firstNum) && !isNaN(secondNum);
}

function isNotNumberNotice() {
    resultNumber.textContent = "숫자를 입력해주세요.";
}

function calculate(firstNum, secondNum, operator) {
    let resultNum = 0;

    switch (operator) {
        case "+":
            resultNum = firstNum + secondNum;
            break;
        case "-":
            resultNum = firstNum - secondNum;
            break;
        case "*":
            resultNum = firstNum * secondNum;
            break;
        case "/":
            resultNum = firstNum / secondNum;
            break;
    }
    resultNumber.textContent = '' + (resultNum);
}