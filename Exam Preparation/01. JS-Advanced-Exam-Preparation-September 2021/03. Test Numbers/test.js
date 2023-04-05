const { expect } = require('chai');
const { testNumbers } = require('./testNumbers');

describe("Tests Numbers", function () {
    describe("sumNumber", function () {
        it("if parameters are number", function () {
            expect(testNumbers.sumNumbers(3, 5)).to.equal('8.00');
        });
        it('works with negative', () => {
            expect(testNumbers.sumNumbers(-3, 5)).to.equal('2.00');
        });
        it('works with floating point', () => {
            expect(testNumbers.sumNumbers(3.5, 0.5)).to.equal('4.00');
            expect(testNumbers.sumNumbers(3.5, -0.5)).to.equal('3.00');
        });
        it('returns undefined wtih string parameters', () => {
            expect(testNumbers.sumNumbers('1', '2')).to.equal(undefined);
            expect(testNumbers.sumNumbers('1', 2)).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, '2')).to.equal(undefined);
        });
        it('returns undefined wtih invalid parameters', () => {
            expect(testNumbers.sumNumbers(null, 2)).to.equal(undefined);
            expect(testNumbers.sumNumbers('1', null)).to.equal(undefined);
            expect(testNumbers.sumNumbers('ab', '2')).to.equal(undefined);
        });
    });

    describe("numberChecker", function () {
        it("works with odd value", function () {
            expect(testNumbers.numberChecker(1)).to.contain('odd!');
        });
        it("works with even value", function () {
            expect(testNumbers.numberChecker(0)).to.contain('even!');
        });
        it("works with even as string", function () {
            expect(testNumbers.numberChecker('0')).to.contain('even!');
        });
        it("works with odd as string", function () {
            expect(testNumbers.numberChecker('1')).to.contain('odd!');
        });
        it("works with empty string", function () {
            expect(testNumbers.numberChecker('')).to.contain('even!');
        });
        it("invalid parameter error", function () {
            expect(() => testNumbers.numberChecker('a')).to.throw(Error, 'The input is not a number!');
        });
    });

    describe("averageSumArray", function () {
        it("works with integer numbers", function () {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
        });
        it("works with integer numbers", function () {
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
        });
    });

});
