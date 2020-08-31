#!/usr/bin/env node

var transportationMethodSmallCars = "small-diesel-car,\nsmall-petrol-car,\nsmall-plugin-hybrid-car,\nsmall-electric-car\n";
var transportationMethodMediumCars = "medium-diesel-car,\nmedium-petrol-car,\nmedium-plugin-hybrid-car,\nmedium-electric-car\n";
var transportationMethodLargeCars = "large-diesel-car,\nlarge-petrol-car,\nlarge-plugin-hybrid-car,\nlarge-electric-car";
var args = require('yargs')
    .option('distance', {
        alias: 'dis',
        describe: 'Distance covered',
        type: 'number',
        demandOption: true
    }).
    option('transportation-method', {
        alias: 'tm',
        describe: 'Argument should belong to Transportstion methods mentioned below:\n ' + transportationMethodSmallCars + transportationMethodMediumCars + transportationMethodLargeCars + '\nbus,\ntrain',
        type: 'string',
        demandOption: true
    }).
    option('unit-of-distance', {
        alias:"ud",
        describe: 'kilometer km or meter m ',
        default: 'km',
        type: 'string'
    }).
    option('output', {
        describe: 'Kilogram kg or gram g',
        type: 'string'
    })
    .usage('Usage: node $0 --distance [number] --transportation-method [string]')
    .argv; 


    var co2Calculator = require('./calculation.js');
    if(args["unit-of-distance"] == 'm'){
        if(args.output == 'kg'){
            console.log('Your trip caused ' + co2Calculator.co2CalMetersKg(args["distance"],args["transportation-method"])+ 'kg of CO2-equivalent');
        }
        else{
            console.log('Your trip caused ' + co2Calculator.co2CalMetersGrams(args["distance"],args["transportation-method"])+ 'kg of CO2-equivalent');
        }
        
    }else{
        if(args.output == 'g'){
            console.log('Your trip caused ' + co2Calculator.co2CalKmGrams(args["distance"],args["transportation-method"])+ 'kg of CO2-equivalent');
        }
        else{
            console.log('Your trip caused ' + co2Calculator.co2CalKmKg(args["distance"],args["transportation-method"])+ 'kg of CO2-equivalent');
        }
    }