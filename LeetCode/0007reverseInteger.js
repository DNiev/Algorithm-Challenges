//LeetCode Number 7. Reverse Integer Javascript

reverse = (x) => {
    const string = "" + Math.abs(x); //take the absolute value as a string using coercion
    const reversed = string.split("").reverse().join(""); // split it into individual characters, reverse it, join it back together
    const number = +reversed; //turn it back into a number through coercion
    if ((number > Math.pow(2, 31) - 1) || (number < Math.pow(-2, 31))){
        return 0; //check to make sure the answer doesnt exceed our 32-bit integer range, if it does return 0
    } else {
    return (x < 0 ? -1 : 1) * number //if the original input was negative, multily by -1 to make it negative again
    }
};

reverse(54321);