/* problem 2.. 
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result.

*/
const myFriends = ['sakib', 'rakib', 'akib', 'abul', 'babul', 'sabul'];
const evenElementLength = [];
const evenElement = (myFriends) => {

    for (let i = 0; i <= myFriends.length; i++) {
        if (myFriends.length % 2 === 0) {
            evenElementLength.push(myFriends[i])
        }
        return evenElementLength;
    }
}

console.log(evenElement(myFriends));

