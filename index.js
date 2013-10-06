var intersection = require('intersect');

module.exports = dice;

function dice(array1, array2) {
    'use strict';
    var common = intersection(array1, array2);
    return (2 * common.length) / (array1.length + array2.length);
}
