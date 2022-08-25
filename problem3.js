/*
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result. */
const numbers = [2, 3, 6, 9, 15]
const calculateNumbers = (numbers) => {
    let sumOfSquare = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumOfSquare += numbers[i] * numbers[i];
        average = (sumOfSquare / numbers.length).toFixed(2)

    }
    return average;
}
console.log(calculateNumbers(numbers));