// // function getSum(a, b = 9) { return a + b; }
// // console.log(getSum(2, 7));

// // const y = x => x * x;

// // const z = y(5);

// // console.log(z);


// const division = (num1, num2) => console.log(num1 / num2);
// division(4, 2);


const add = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;

const result = multiply(7, 8);
// console.log(result)

const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

// no parameter arrow function
const getPie = () => 3.14;

// one parameter
const doubleIt = (num) => num * 2;

// one parameter simple version
const fiveTimes = num => num * 5;

// multi line arrow function
// if you want to return something, use the return 
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}
