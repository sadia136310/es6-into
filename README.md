# es6-into

1. What is ES6? Have you ever used anything from ES6?
 ans:ES6 or the ECMAScript 2015 is the 6th and major edition of the ECMAScript language specification standard. It defines the standard for the implementation of JavaScript and it has become much more popular than the previous edition ES5.

ES6 comes with significant changes to the JavaScript language. It brought several new features like, let and const keyword, rest and spread operators, template literals, classes, modules and many other enhancements to make JavaScript programming easier and more fun. In this article, we will discuss some of the best and most popular ES6 features that we can use in your everyday JavaScript coding.

let and const Keywords
Arrow Functions
Multi-line Strings
Default Parameters
Template Literals
Destructuring Assignment
Enhanced Object Literals
Promises
Classes
Modules
2. Explain the difference between var, let and const.
var	let	const
It can be declared without initialization.	It can be declared without initialization.	It cannot be declared without initialization.
3.What is arrow function and how to created it with example?
Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions. For example :// using arrow functions
let x = (x, y) => x * y;

4..4. Give an example of an Arrow function in ES6? List down its advantages.
reduces lots of code and makes the mode more readable....
5. Discuss spread operator in ES6 with an example.
ans: The  spread operator is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expands it into individual elements. The spread operator is commonly used to make shallow copies of JS objects. Using this operator makes the code concise and enhances its readability
<script>
    let array1 = [5, 6, 7];
    let array2 = [8, 9, 10];
  
    // Using concat() method.....
    let concatenatedArray = array1.concat(array2);
    console.log(concatenatedArray);
  
    // Using spread (...) operator......
    let newArray = [...array1, ...array2];
    console.log(newArray);
</script>

6.What do you understand about default parameters?
ans: In JavaScript, a parameter has a default value of undefined. It means that if you don't pass the arguments into the function, its parameters will have the default values of undefined 
A. Only one parameter of a function can be a default parameter.
Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
7. What are template literals in ES6?
ans:::Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions, and for special constructs called tagged templates.

Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation (to create strings by doing substitution of placeholders). However, a tagged template literal may not result in a string; it can be used with a custom tag function to perform whatever operations you want on the different parts of the template literal.

