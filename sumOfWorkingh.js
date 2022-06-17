//this function calculates the sum of working hours.
const workingHours = [4, 5, 7.5, 8.5, 9, 6];

function totalhour() {
    let sum = 0;
    for (i = 0; i < workingHours.length; i++) {
        sum += workingHours[i];
    }
    console.log(`the total working hour is ${sum} hour`);
}
totalhour();