/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

let s = "abc";
let p = "abc";

 var isMatch = function(s, p) {

    //javascript has a built-in RegEx function
    const regex = new RegExp('^' + p + '$', 'm');
    return (regex.test(s));
};

isMatch();