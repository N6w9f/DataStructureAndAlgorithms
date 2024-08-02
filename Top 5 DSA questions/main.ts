/**
 * Top 5 data structure & algorithms questions
 */

/**
 * 1 - Palindrome number
 * 121 => ("121" === "121") => true
 * -121 => ("-121" === "121-") => false
 * 10 => ("10" === "01") => false
 */
function isPalindrome(value: number): boolean {
     if (value < 0) return false;
     if (value === 0) return true;

     let value_: string = value.toString();
     let length: number = value_.length;

     for (let i = 0; i < Math.floor(length / 2); i++) {

          if (value_[i] !== value_[length - (i + 1)]) return false

     }; return true;
};





/**
 * 2 - Fibonacci Number
 * fib(0) => 0
 * fib(7) => 13
 */
function fib(operations: number): number {
     let initialArray: number[] = [0, 1];

     for (let i = 2; i <= operations; i++) {
          initialArray[i] = initialArray[i - 2] + initialArray[i - 1];
     };

     return initialArray[operations];
}; const fibRecursion = (operations: number): number => operations <= 1 ? operations : fibRecursion(operations - 2) + fibRecursion(operations - 1);





/**
 * 3 - Valid anagram
 * (s = "anagram", t = "nagaram") => true
 * (s = "rat", t = "car") => false
 */
function isAnagram(s: string, t: string): boolean {
     if (s.length !== t.length) return false;

     let sObj: { [key: string]: number } = {};
     let tObj: { [key: string]: number } = {};

     for (let i = 0; i < s.length; i++) {
          sObj[s[i]] = sObj[s[i]] ? sObj[s[i]] += 1 : 1;
          tObj[t[i]] = tObj[t[i]] ? tObj[t[i]] += 1 : 1;
     };

     for (const key in sObj) {
          if (sObj[key] !== tObj[key]) return false;
     }; return true;
};
function isAnagram2(s: string, t: string): boolean {
     if (s.length !== t.length) return false;

     let sObj = new Map<string, number>();
     let tObj = new Map<string, number>();

     for (let i = 0; i < s.length; i++) {
          let sValue = sObj.get(s[i]) || 0;
          let tValue = tObj.get(t[i]) || 0;
          sObj.set(s[i], sValue += 1);
          tObj.set(t[i], tValue += 1);
     };

     for (const [key, value] of sObj) {
          if (tObj.get(key) !== value) return false
     }

     return true
};




/**
 * 4 - Two sum
 * nums = [...nums], target = num
 */
function twoSum(nums: number[], target: number): -1 | [number, number] {
     let Obj: { [key: number]: number } = {};

     // for (const [index, value] of nums.entries()) {

     //      if (Obj[target - value] !== undefined) return [Obj[target - value], index];
     //      Obj[value] = index;

     // };

     // for (let i = 0; i < nums.length; i++) {
     //      let value = nums[i];
     //      let diff = target - value;
     //      if (Obj[value] !== undefined) return [Obj[value], i];
     //      Obj[diff] = i;
     // };

     for (let i = 0; i < nums.length; i++) {
          let value = nums[i];
          let diff = target - value;
          if (Obj[diff] !== undefined) return [Obj[diff], i];
          Obj[value] = i;
     };

     throw new Error("cannot find twoSum");
};





/**
 * 5 - Best time to buy and sell stocks?
 */

function sells(nums: number[]) {
     let min = nums[0];
     let profit = 0;

     for (let i = 1; i < nums.length; i++) {
          if (nums[i] < min) min = nums[i];
          if ((nums[i] - min) > profit) profit = nums[i] - min;
     };

     return profit
};

