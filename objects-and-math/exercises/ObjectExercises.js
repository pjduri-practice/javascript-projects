function move() {
   return Math.round(Math.random()*10)
}

const superChimpOne = {
   astronautID: 1,
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: move
}

const salamander = {
   astronautID: 2,
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: move
}

const superChimpTwo = {
   astronautID: 3,
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: move
}

const beagle = {
   astronautID: 4,
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: move
}

const tardigrade = {
   astronautID: 5,
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: move
}

// After you have created the other object literals, add the astronautID property to each one
// Create an array to hold the animal objects.
const animalsArr = [
   superChimpOne, 
   salamander,
   superChimpTwo,
   beagle,
   tardigrade
]

// Print out the relevant information about each animal.
function crewReports(animal) {
   return `${animal.name} is a ${animal.species}.  They are ${animal.age} years old and ${animal.weight} kilograms. Their ID is ${animal.astronautID}.\n`
}

for (const animal of animalsArr) {
   console.log(crewReports(animal))
}

// Start an animal race!
function fitnessTest(crewArray) {
   let fitnessResults = []
   for (const crewMate of crewArray) {
      let totalMoves = 0
      while (totalMoves < 20) {
         totalMoves += crewMate.move()
      }
      fitnessResults.push(`${crewMate.name} took ${totalMoves} turns to take 20 steps.`)
   }
   return fitnessResults
}

console.log(fitnessTest(animalsArr).join('\n\n'))