const submitBtn = document.getElementById('converter__submit');
const result = document.getElementById('converter__result');

const convert = (input) => {
    const romanArr = {
        M: 1000, CM: 900, D: 500,
        CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10,
        IX: 9, V: 5, IV: 4, I: 1
    };
    let converted = '', i;
    if (input < 4000 && input > 0) {
        for (i in romanArr) {
            while (input >= romanArr[i]) {
                converted += i;
                input -= romanArr[i];
            }
        }
    }
    else {
        if (isNaN(input)) {
            converted = 'Please enter a valid number';
        }
        else if (input < 1) {
            converted = 'Please enter a number greater than or equal to 1';
        }
        else if (input > 3999) {
            converted = 'Please enter a number less than or equal to 3999'
        }
    }
    
    return converted;
}

submitBtn.addEventListener('click', () => {
    let userInput = parseInt(document.getElementById('converter__input').value);
    result.innerText = convert(userInput);
    result.classList.remove('hidden');
});