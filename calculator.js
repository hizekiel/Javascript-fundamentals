function calculator(typeOfCalcultion, a, b) {
    switch (typeOfCalcultion) {
        case 'Multiplication':
            answer = a * b;
            break;
        case 'Division':
            answer = a / b;
            break;
        case 'Addition':
            answer = a + b;
            break;
        case 'Subtraction':
            answer = a - b;
            break;
        default:
            console.log(error);
    }
    return answer;
}

solution = calculator('Multiplication', 3, 6);
console.log('The answer of the calculation is' + ' ' + solution);