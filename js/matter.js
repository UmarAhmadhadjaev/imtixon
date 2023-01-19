// 1-masala
// function findLongestWordLength(str) {
//     let words = str.split(' ');
//     let maxLength = 0;
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > maxLength) {
//             maxLength = words[i].length;
//         }
//     }
//     return maxLength;
// }
// console.log(findLongestWordLength("Men Najot Ta'limning Web Dasturlash kursida o'qiyman"));


// 2-masala Palindrome
// function palindrome(str) {
//     var re = /[\W_]/g;
//     var lowRegStr = str.toLowerCase().replace(re, '');
//     var reverseStr = lowRegStr.split('').reverse().join('');
//     return reverseStr === lowRegStr;
//     }
// console.log(palindrome("eye"));


// 3-masala
// function kabisaYear(year) {
//     if (year % 4 == 0) {
//         if (year % 100 == 0) {
//             if (year % 400 == 0) {
//                 return true;
//             }
//             return false;
//         }
//         return true;
//     }
//     return false;
// }
// console.log(kabisaYear(2000));


// 4-masala
// a negative number
// const array = [1, -2, 3, 4, 5, 6, -7, -8, -9, 8, 9, 10];
// const negativeNumber = array.filter((number) => number < 0);
// console.log(negativeNumber);

// a positive number
// const Numberarray = [1, 2, 3, 4, 5, 6, -7, -8, -9, 8, 9, 10];
// const positiveNumber = Numberarray.filter((number) => number > 0);
// console.log(positiveNumber);
