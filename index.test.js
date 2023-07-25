const {stringLength, reverseString, Calculator, capitalize} = require('./index.js')

test ('ENOCK to be length of 5', () => {
    expect(stringLength('ENOCK')).toBe(5)
})
test ('EnumerationTest to give error message', () => {
    expect(stringLength('EnumerationTest')).toBe('String should be greater than 1 and less than 10')
})

test ('ENOCK to be KCONE', () => {
    expect(reverseString('ENOCK')).toBe('KCONE')
})