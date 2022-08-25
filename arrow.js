// function declaretion

// function add(first, second) {
//     const result = first + second;
//     return result;
// }


// function expression 
const add1 = function add1(first, second) {
    const result = first + second;
    return result;
}
// function expression with annonymous
const add2 = function (first, second) {
    const result = first + second;
    return result;
}

function add4(first, second) {
    return first + second;

}
const add5 = function (first, second) {
    return first + second;
}


const add6 = (first, second) => first + second;
const result = add6(20, 10);
console.log(result);

// const adding = add(10, 30);
// console.log(adding);


// interview ques : differces betwwen
// function declaretion, function expression, arrow function