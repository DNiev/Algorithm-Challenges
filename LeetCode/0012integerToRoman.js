/**
 * @param {number} num
 * @return {string}
 */

let num = 3999;

 var intToRoman = function(num) {

    //set up a map of all the roman numerals

    const romanMap = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    //set up a variable to hold our answer

    let answer = '';

    for (key in romanMap) {
        answer += key.repeat(Math.floor(num/romanMap[key]));
        num %= romanMap[key];
    };


    console.log(answer);
    
};

intToRoman(num);