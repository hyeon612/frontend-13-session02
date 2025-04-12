function add() {
    const firstInput = document.querySelector('#num1').value;
    const secondInput = document.querySelector('#num2').value;
    const result = document.querySelector('#result');

    let firstNumber = parseFloat(firstInput);
    let secondNumber = parseFloat(secondInput);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        result.textContent = "유효한 숫자를 입력해주세요";
        return;
    }

    const resultNumber = firstNumber + secondNumber;
    result.textContent = resultNumber;
}