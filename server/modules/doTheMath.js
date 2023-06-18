

// function doTheMath (num1, num2, btn) {
//     if (btn === '+') {
//         return num1 + num2
//     } else if (btn === '-') {
//         return num1 - num2
//     } else if (btn === '*') {
//         return num1 * num2 
//     } else if (btn === '/') {
//         return num1 / num2
//     }
// }
let results = 0

function doTheMath (num1, btn, num2) {
    if (btn === '+') {
        results = num1 + num2
    } else if (btn === '-') {
        results = num1 - num2
    } else if (btn === '*') {
        results = num1 * num2 
    } else if (btn === '/') {
        results = num1 / num2
    }
    return results
}
module.exports = doTheMath