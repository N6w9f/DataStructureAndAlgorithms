"use strict";
/**
 * Top 5 data structure & algorithms questions
 */
/**
 * 1 - Palindrome number
 * 10 => 01 | 10 === 01 => false
 * 121 => 121 | 121 === 121 => true
 */
function isPalindrome(value) {
    if (!(typeof value === "number" || typeof value === "string"))
        return;
    if (typeof value === "number")
        value = String(value);
    let _value = "";
    for (let i = 0; i < value.length; i++) {
        _value += value[value.length - (i + 1)];
    }
    ;
    console.log(value);
    console.log(_value);
}
;
isPalindrome(10);
isPalindrome(101);
isPalindrome(123);
isPalindrome(121);
