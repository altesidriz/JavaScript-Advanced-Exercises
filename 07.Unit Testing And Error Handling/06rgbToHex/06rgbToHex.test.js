const { expect } = require('chai');
const { rgbToHexColor } = require("./06rgbToex");

describe('test working?', () => {
    it('converting to black working?', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
    });

    it('converting to white working?', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
    });

    it('converting to some color working?', () => {
        expect(rgbToHexColor(35, 68, 101)).to.equal('#234465')
    });

    it('converting 15,15,15 to #0F0F0F', () => {
        expect(rgbToHexColor(15, 15, 15)).to.equal('#0F0F0F')
    });

    it('returns undefined for missing params', () => {
        expect(rgbToHexColor()).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor(0, 0)).to.be.undefined;
    });

    it('returns undefined for params ot uf range', () => {
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });

    it('returns undefined for params out of range', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });

    it('returns undefined for floats', () => {
        expect(rgbToHexColor(1.1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 1.1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 1.1)).to.be.undefined;
    });

    it('returns undefined for invalid params', () => {
        expect(rgbToHexColor('1', 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, '1', 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, '1')).to.be.undefined;
    });

});