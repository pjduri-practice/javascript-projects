//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/
const tripleOrPirate = function (num) {
    if (typeof num === 'number') {
        return num * 3
    } else if (typeof num === 'string') {
        return 'ARR!'
    }
    return num
}

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

const arr = ['Elocution', 21, 'Clean teeth', 100];

for (let i=0; i<arr.length; i++) {
    console.log(tripleOrPirate(arr[i])) 
}