const Co2AverageValue = require('./Co2AveragValue.json');
var convert = require('./convert.js')
//distance in m and output in g
module.exports.co2CalMetersGrams = function (distance,transportmode){
    var result = convert.convertMToKM(distance)*Co2AverageValue.vehical[transportmode];
    return Number.parseFloat(result).toFixed(1);
}

//distance in m and output in kg
module.exports.co2CalMetersKg = function (distance,transportmode){
    var result = convert.convertMToKM(distance)*convert.convertGToKG(Co2AverageValue.vehical[transportmode]);
    return Number.parseFloat(result).toFixed(1); 
}

//distance in km and output in g
module.exports.co2CalKmGrams = function (distance,transportmode){
    var result = distance*Co2AverageValue.vehical[transportmode];
    return Number.parseFloat(result).toFixed(1); 
}

//distance in km and output in kg
module.exports.co2CalKmKg = function (distance,transportmode){
    var result = distance*convert.convertGToKG(Co2AverageValue.vehical[transportmode]);
    return Number.parseFloat(result).toFixed(1);
}