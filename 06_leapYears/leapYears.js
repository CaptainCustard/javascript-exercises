const leapYears = function(year) {
    //Leap years must always be divisable by 4.
    if (year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)) {
        return true;
    }  else {
        return false;
    }
}

module.exports = leapYears
console.log(leapYears(4))
