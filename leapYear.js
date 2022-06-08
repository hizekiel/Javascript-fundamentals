/*this function calculates is the given year is leap year or not*/


function leapYear(year) {

    if (year % 4 === 0) { //first it checks if it is divisible by 4
        if (year % 100 === 0) { // then checks if it is divisible by 100
            if (year % 400 === 0) { // third it checks it if it is dvisible by 400

                return true
            }
        }

        return console.log('The year is a leap year');
    } else {
        return console.log('The year is not a leap year');
    }
}
leapYear(2015);