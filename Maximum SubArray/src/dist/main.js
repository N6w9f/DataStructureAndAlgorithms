"use strict";
/**
 * *** Maximum SubArray ***
 */
let array1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let array2 = [5, 4, -1, 7, 8];
function subArray(array) {
    let obj = {
        subArray: 0,
        start: 0,
        end: (array.length - 1),
        array: array,
    };
    for (let i = 0; i < array.length; i++) {
        let currentSum = 0;
        for (let j = i; j < array.length; j++) {
            currentSum += array[j];
            if (currentSum > obj.subArray) {
                obj.subArray = currentSum;
                obj.start = i;
                obj.end = j;
            }
            ;
        }
        ;
    }
    ;
    return { ...obj, array: array.slice(obj.start, obj.end + 1) };
}
;
console.log(subArray(array1));
console.log(subArray(array2));
function subArrayOofN(array) {
    let maxSum = array[0];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        if (sum > maxSum)
            maxSum = sum;
        if (sum < 0)
            sum = 0;
    }
    ;
    return maxSum;
}
;
console.log(subArrayOofN(array1));
console.log(subArrayOofN(array2));
function subArrayRecursion(array, start = 0, end = array.length, sum = 0, maxSum = array[0]) {
    if (start === (end - 1)) {
        sum += array[start];
        if (sum > maxSum)
            maxSum = sum;
        return maxSum;
    }
    ;
    sum += array[start];
    if (sum > maxSum)
        maxSum = sum;
    if (sum < 0)
        sum = 0;
    return subArrayRecursion(array, ++start, end, sum, maxSum);
}
;
console.log(subArrayRecursion(array1));
console.log(subArrayRecursion(array2));
