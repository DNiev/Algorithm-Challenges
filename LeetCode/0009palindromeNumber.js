// /**
//  * @param {number} x
//  * @return {boolean}
//  */
const x = 12321;

var isPalindrome = function(x) {

    //create a variable to hold our answer, default to false
    let answer = false;

    //create another variable to reverse our integer "x"

    //turn it into a string
    const xAsAString = "" + Math.abs(x);

    //split it into individual charcters, reverse it, and join it back together

    const reversed = xAsAString.split("").reverse().join("");

    //turn the reversed string back into a number

    const reversedNumber = +reversed;

    if (x === reversedNumber) {
        answer = true;
        return(answer)
    } else {
        return(answer)
    }
};
isPalindrome(x);