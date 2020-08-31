const assert = require('assert');
var calculation = require('../calculation.js');
var convert = require('../convert.js')

describe('Test calculations.js', () => {
    //distance in m and output in g
 it('for distance 1000m and vehical \"small-diesel-car\" should return Co2-equivalent 142g', () => {
        assert.equal(calculation.co2CalMetersGrams(1000,"small-diesel-car"), 142);
    });
    //distance in m and output in kg
 it('for distance 1000m and vehical \"small-diesel-car\" should return Co2-equivalent 0.1kg', () => {
        assert.equal(calculation.co2CalMetersKg(1000,"small-diesel-car"), 0.1);
    });
    //distance in km and output in g
 it('for distance 1000km and vehical \"small-diesel-car\" should return Co2-equivalent 142000g', () => {
        assert.equal(calculation.co2CalKmGrams(1000,"small-diesel-car"), 142000);
    });
    //distance in km and output in kg
 it('for distance 1000km and vehical \"small-diesel-car\" should return Co2-equivalent 142kg', () => {
        assert.equal(calculation.co2CalKmKg(1000,"small-diesel-car"), 142);
    });
});

describe('Test convert.js', () => {
    //m to km
 it('1000m to km should return 1km', () => {
        assert.equal(convert.convertMToKM(1000), 1);
    });
    //km to m
 it('1km to m should return 1000m', () => {
        assert.equal(convert.convertKMToM(1), 1000);
    });
    //g to kg
 it('1000g to kg should return 1kg', () => {
        assert.equal(convert.convertGToKG(1000), 1);
    });
    //kg to g
 it('1kg to g should return 1000g', () => {
        assert.equal(convert.convertKGToG(1), 1000);
    });
});
