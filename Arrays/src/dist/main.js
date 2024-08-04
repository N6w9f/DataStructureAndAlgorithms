"use strict";
/**
 * *** Arrays ***
 */
/**
 * Ques 1 - Second largest number
 */
// let array1 = [12, 35, 1, 10, 34, 1];
// let array2 = [10, 5, 10];
// function secondLargestNumber1<T = any>(array: T[]) {
//      array = Array.from(new Set(array));
//      if (array.length < 2) throw new Error("please enter an array that has length of 2 or higher");
//      array.sort((a, b) => +b - +a);
//      console.log(array[1]);
// }; secondLargestNumber1(array1); secondLargestNumber1(array2);
// function secondLargestNumber2(array: number[]) {
//      if (array.length < 2) throw new Error("please enter an array that has length of 2 or higher");
//      let largest = Number.NEGATIVE_INFINITY;
//      let secondLargest = Number.NEGATIVE_INFINITY;
//      for (let i = 0; i < array.length; i++) {
//           if (array[i] > largest) {
//                secondLargest = largest;
//                largest = array[i];
//                continue;
//           };
//           if (array[i] !== largest && array[i] > secondLargest) secondLargest = array[i];
//      };
//      console.log(secondLargest);
// }; secondLargestNumber2(array1); secondLargestNumber2(array2);;
/**
 * Ques 2 - Rotate array by k
 */
// let array1 = [1, 2, 3, 4, 5, 6, 7];
// let array2 = [-1, -100, 3, 90];
// function rotateArray1<T = any>(array: T[], k: number) {
//      if (k > array.length) k = k % array.length;
//      array = JSON.parse(JSON.stringify(array));
//      let elements = array.splice(array.length - k, k);
//      array.unshift(...elements);
//      console.log(array);
// }; rotateArray1(array1, 3); rotateArray1(array2, 2);
// function rotateArray2<T = any>(array: T[], k: number) {
//      if (k > array.length) k = k % array.length;
//      array = JSON.parse(JSON.stringify(array));
//      let elements: T[] = [];
//      for (let i = array.length - k; i < array.length; i++) {
//           elements.push(array[i]);
//      };
//      for (let i = 0; i < array.length - k; i++) {
//           elements.push(array[i]);
//      };
//      console.log(elements);
// }; rotateArray2(array1, 3); rotateArray2(array2, 2)
// function rotateArray3<T = any>(array: T[], k: number) {
//      if (k > array.length) k = k % array.length;
//      reverse(array);
//      reverse(array, 0, k - 1);
//      reverse(array, k);
//      console.log(array);
// }; rotateArray3(array1, 3); rotateArray3(array2, 2);
// function reverse<T = any>(array: T[], start: number = 0, end: number = array.length - 1) {
//      if (array.length < 2) return array;
//      while (start < end) {
//           [array[start++], array[end--]] = [array[end], array[start]]
//      };
//      return array;
// };
/**
 * Ques 2 - Remove duplicates from an sorted array !
 */
// let array1 = [1, 2];
// let array2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// function removeDuplicates1<T = any>(array: T[]) {
//      for (let i = 1; i < array.length; i++) {
//           if (array[i] === array[i - 1]) {
//                array.splice(i, 1);
//                i--;
//           };
//      };
//      console.log(array.length);
// }; removeDuplicates1(array1); removeDuplicates1(array2);
// function removeDuplicates2<T = any>(array: T[]) {
//      if (array.length < 1) { console.log(0); return };
//      let unique = 0;
//      for (let j = 1; j < array.length; j++) {
//           if (array[unique] !== array[j]) {
//                unique++
//                array[unique] = array[j];
//           };
//      };
//      array.length = unique + 1;
//      console.log(unique + 1);
//      console.log(array);
// }; removeDuplicates2(array1); removeDuplicates2(array2);
