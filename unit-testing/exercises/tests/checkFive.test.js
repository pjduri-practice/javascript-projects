const checkFive = require('../checkFive')

describe('checkfive', function() {
    
    test('that if number is less than five it will say so', function() {
        let output = checkFive(2)
        expect(output).toEqual('2 is less than 5.')
    })

    test('that if number is greater than five it will say so', function() {
        let output = checkFive(9)
        expect(output).toEqual('9 is greater than 5.')
    })

    test('that if number is five it will say so', function() {
        let output = checkFive(5)
        expect(output).toEqual('5 is equal to 5.')
    })

})