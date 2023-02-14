const {expect} = require('chai');
function sum(a, b) {
    return Math.round(a + b)
}


describe('Test Suite', () => {
    it('works with positive integers', () => {
            expect(sum(3,5)).to.equal(8, 'did not work with 3 and 5')
        });

    it('works with floating point numbers', () => {
            expect(sum(3.14, 2.71)).to.equal(5.85, 'did not work with 3.14 and 5.85')
        });
});