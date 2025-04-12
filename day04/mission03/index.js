const buttons = document.querySelectorAll('button');
const firstInputWarningMessage = document.querySelector('#firstNumberNotice');
const continuousWarningMessage = document.querySelector('#continuousOperatorNotice');
const display = document.getElementById('display');

let displayedNumber;

buttons.forEach(button => {
    button.addEventListener('click', e => {
        const input = e.target.textContent;

        if (isComputable(input)) {
            displayedNumber = display.value + input;
            display.value = displayedNumber;
            validateInput(displayedNumber);
        } else if (input === "=") {
            try {
                const validExpression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
                displayedNumber = eval(validExpression);
                display.value = displayedNumber;
            } catch (err) {
                alert("유효한 숮자가 아닙니다.");
            }
        } else if (input === "Clear") {
            display.value = null;
            displayedNumber = null;
        }
    });
});

function isComputable(Input) {
    return !(Input === "=" || Input === "Clear");
}

function validateInput(Input) {
    const startsWithInvalid = /^[×÷/*.]/.test(Input);
    const hasContinuousOperator = /[+\-×÷/*.]{2,}/.test(Input);

    if (startsWithInvalid) {
        firstInputWarningMessage.style.display = 'block';
        display.value = null;
    } else {
        firstInputWarningMessage.style.display = 'none';
    }

    if (hasContinuousOperator) {
        continuousWarningMessage.style.display = 'block';
    } else {
        continuousWarningMessage.style.display = 'none';
    }

    return !(startsWithInvalid || hasContinuousOperator);
}
