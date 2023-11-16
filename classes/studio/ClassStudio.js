//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name,
        this.mass = mass,
        this.scores = scores
    }
    
    // Add methods for adding scores, averaging scores and 
    // determining candidate status as described in the studio activity.
    addScore(score) {
        this.scores.push(score)
    }

    calcAverage() {
        let total = 0;
        for (let i=0; i<this.scores.length; i++) {
            total += this.scores[i]
        }
        return Math.round((total / this.scores.length) * 10)/10
    }

    status() {
        const average = this.calcAverage()
        return average >= 90 ? 'Accepted' 
            : average >= 80 ? 'Reserve'
            : average >= 70 ? 'Probationary'
            : 'Rejected'

        // if (avg >= 90) {
        //     return "Accepted";
        //   } else if (avg >= 80) {
        //     return "Reserve";
        //   } else if (avg >= 70) {
        //     return "Probationary";
        //   } else {
        //     return "Rejected";
        //   }
    }

}

const bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90])
const merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97])
const gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62])

function printCandidates() {
    for (const candidate of [bubbaBear, merryMaltese, gladGator]) {
        console.log()
        console.log(`${candidate.name} earned an average test score of ${candidate.calcAverage()}% and has a status of ${candidate.status()}.'`)
        console.log()
    }
}

printCandidates()
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let gatorAttempts = gladGator.scores.length
while (true) {
    let newScore = 90 + Math.floor(Math.random() * 10)
    gladGator.addScore(newScore)
    ++gatorAttempts
    if (gladGator.calcAverage() > 90) {
        console.log(`It took ${gladGator.name} ${gatorAttempts} tries to reach accepted status.`)
        break
    }
}

printCandidates()