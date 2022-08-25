function add(num1, num2) {
    if (num2 === undefined) {
        num2 = 0
    }
    total = num1 + num2;
    return total;
}
const resultIs = add(2)
console.log(resultIs);