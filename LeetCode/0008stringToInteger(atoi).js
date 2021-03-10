/**
 * @param {string} s
 * @return {number}
 */

const s = "   -358748 and some words";

var myAtoi = function(s) {

    //index
    let i = 0;

    //polarity, by default is positive
    let polarity = 1;

    //a variable to store our answer as we build it
    let response = 0;

    //if there is a blank cahracter at that index of s, ignore it and move on
    while (s[i] === ' ') i++;

    //if the next index is a positive or negative sign, assign that value to polarity variable
    if (s[i] === '+' || s[i] === '-') {
        polarity = (s[i] ==='+' ? 1 : -1);
        i++;
    }
    //as long as the next index is between 0 and 9
    while (s[i] >= '0' && s[i] <= '9') {

        //update the response with the new digit. Subtracting 0 helps to coerce the string into a number.
        response = (response * 10) + (s[i] - 0);

        //keeping our response within the 32 bit boundary
        if (polarity === 1 && response > (Math.pow(2, 31) - 1)) {
            return(Math.pow(2, 31)-1);
        }
        if (polarity === -1 && response > (Math.pow(2, 31))) {
            return((Math.pow(2, 31)) * -1);
        }
        i++;
    }
    return(response * polarity)
};
myAtoi(s);
