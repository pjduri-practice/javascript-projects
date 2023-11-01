// Exercise #1: Construct for loops that accomplish the following tasks:
//     a. Print the numbers 0 - 20, one number per line.
console.log('Numbers 1 - 20')
for (let i=0; i<=20; ++i) {
  console.log(i)
}
console.log()

//     b. Print only the ODD values from 3 - 29, one number per line.
console.log('Odd numbers 3 - 29')
for (let i=3; i<30; i++) {
  if (i%2 !== 0) {
    console.log(i)
  }
}
console.log()

//     c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
console.log('Even numbers descending 12 - -14')
for (let i=12; i>-15; i--) {
  if (i%2 === 0) {
    console.log(i)
  }
}
console.log()

// d. Challenge - Print the numbers 50 - 20 in descending order, 
//  but only if the numbers are multiples of 3. (Your code should work even if you 
//  replace 50 or 20 with other numbers). 
console.log('Multiples of 3 descending 50 - 20')
for (let i=50; i>=20; i--) {
  if (i%3 === 0) {
    console.log(i)
  }
}
console.log()


// Exercise #2: 
// Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].
let org = 'LaunchCode'
let randoArr = [1, 5, 'LC101', 'blue', 42]

// Construct ``for`` loops to accomplish the following tasks:
//   a. Print each element of the array to a new line.
console.log('Rando array elements')
for (let i=0; i<randoArr.length; i++) {
  console.log(randoArr[i])
}
console.log()
//   b. Print each character of the string - in reverse order - to a new line.
console.log('Reversed String')
for (let i=org.length - 1; i>=0; i--) {
  console.log(org[i])
}
console.log()



// Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
let originalArr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]
let evensArr = []
let oddsArr = []
//   a. One array contains the even numbers, and the other holds the odds.
for (let i=0; i<originalArr.length; i++) {
  if (originalArr[i]%2 === 0) {
    evensArr.push(originalArr[i])
  } else {
    oddsArr.push(originalArr[i])
  }
}
//   b. Print the arrays to confirm the results. 
console.log('Original array: ', ...originalArr)
console.log()
console.log('Evens Array: ', ...evensArr)
console.log()
console.log('Odds Array: ', ...oddsArr)