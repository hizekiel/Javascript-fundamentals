function calculator(typeOfCalcultion, a, b) {
    switch (typeOfCalcultion) {
        case 'Multiplication':
            Answer = a * b;
            break;
        case 'Division':
            Answer = a / b;
            break;
        case 'Addition':
            Answer = a + b;
            break;
        case 'Subtraction':
            Answer = a - b;
            break;
        default:
            console.log(error);
    }
    return Answer;
}

solution = calculator('Multiplication', 3, 6);
console.log('The answer of the calculation is' + ' ' + solution);