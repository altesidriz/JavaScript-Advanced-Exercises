const { expect } = require('chai');
const { isSymmetric } = require("./05checkForSymmetry");

describe('Symetry checker', () => {
    it ('works works with symetric array', () => {
        expect(isSymmetric([1,2,2,1])).to.be.true;
    });

    it ('returns false for non-symetric array', () => {
        expect(isSymmetric([1,2,3,1])).to.be.false;
    });

    it ('returns false for invalid input', () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it ('works with symetric odd-length array', () => {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    });

    it ('works with symetric string array', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });

    it ('returns false for string input', () => {
        expect(isSymmetric('abba')).to.be.false;
    });

    it ('returns false for different type input', () => {
        expect(isSymmetric([1, 2, 3, '2', 1])).to.be.false;
    });
});