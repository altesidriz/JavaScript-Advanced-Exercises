const { expect } = require('chai');
const { isOddOrEven } = require('./evenOrOdd');

describe("Even Odd Checker", () => {
    it("check if input is number", () => {
        expect(isOddOrEven(1)).to.be.undefined;
    });

    it("check if input is array", () => {
        expect(isOddOrEven([1])).to.be.undefined;
    })

    it("check if input is array", () => {
        expect(isOddOrEven({a: 1})).to.be.undefined;
    })

    it("check if input is even", () => {
        expect(isOddOrEven("aa")).to.equal('even');
    })

    it("check if input is odd", () => {
        expect(isOddOrEven("a")).to.equal('odd');
    })

    it("check if working correctly", () => {
        expect(isOddOrEven('1a1a1a')).to.equal('even');
    })

    it("check if  working corectly2", () => {
        expect(isOddOrEven('1a1a1')).to.equal('odd');
    })
})