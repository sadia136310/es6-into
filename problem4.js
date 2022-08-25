/* Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result. */

const num1 = [122, 114, 17, 229, 353];
const num2 = [134, 218, 45, 100];

const max = (num1, num2) => {
    let allnumbers = [...num1, ...num2];
    largest = Math.max(...allnumbers);
    return largest;

}


console.log(max(num1, num2));

// const max = (num1, num2) => {
//     let allnumbers = [...num1, ...num2];
//     return allnumbers;
// }


// console.log(max(num1, num2));
