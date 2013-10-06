module.exports = dice;

function intersection(array1, array2) {
    'use strict';
    var temp;
    if (array2.length > array1.length) {
        temp = array2;
        array2 = array1;
        array1 = temp;
    }
    array1 = array1.filter(function (element) {
        return array2.indexOf(element) !== -1;
    });
    return array1;
}

function dice(array1, array2) {
    'use strict';
    var common = intersection(array1, array2);
    return (2 * common.length) / (array1.length + array2.length);
}
