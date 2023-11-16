// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numPages, numCheckouts, isDiscarded) {
        this.title = title,
        this.author = author,
        this.copyrightDate = copyrightDate,
        this.isbn = isbn,
        this.numPages = numPages,
        this.numCheckouts = numCheckouts,
        this.isDiscarded = isDiscarded
    }

    logCheckout(uses = 1) {
        this.numCheckouts += uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numPages, numCheckouts, isDiscarded) {
        super(title, author, copyrightDate, isbn, numPages, numCheckouts, isDiscarded)
    }

    discard(currentYear) {
        if (currentYear - this.copyrightDate > 5) {
            this.isDiscarded = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numPages, numCheckouts, isDiscarded) {
        super(title, author, copyrightDate, isbn, numPages, numCheckouts, isDiscarded)
    }

    discard() {
        if (this.numCheckouts > 100) {
            this.isDiscarded = 'Yes';
        }
    }
}
// Declare the objects for exercises 2 and 3 here:
const prideAndPrej = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No')
const shuttleManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, Number('0000000000000'), 1147, 1, 'No')
console.log('1')
console.log(prideAndPrej)
console.log(shuttleManual)
console.log()

// Code exercises 4 & 5 here:
prideAndPrej.logCheckout(5)
shuttleManual.discard(2023)

console.log('2')
console.log(prideAndPrej)
console.log(shuttleManual)