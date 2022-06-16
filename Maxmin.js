function smallest(a, b, c) { // returns the samllest nuber of the three

    if (a < b && a < c) {

        console.log(a + ' ' + 'is the smallest');
    } else if (b < a && b < c) {

        console.log(b + ' ' + 'is the smllest');
    } else if (c < a && c < b) {

        console.log(c + ' ' + 'is the smallest');
    } else {
        console.log('at least two of the numbers are equal');
    }

}


function largest(a, b, c) {
    if (a > b && a > c)
        console.log(a + ' ' + 'is the largest');
    else if (b > a && b > c)
        console.log(b + ' ' + 'is the largest');
    else if (c > a && c > b)
        console.log(c + ' ' + 'is the largest');
    else
        console.log('at least two of the numbers are equal');


}

function minmax(a, b, c) {

    smallest(a, b, c);
    largest(a, b, c);

}
minmax(5, 4, 6);