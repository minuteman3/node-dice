var dice = require('../');
var test = require('tape');

/*
 * Throw a variety of hand-computed values at dice and make sure
 * the expected results still come out.
 */

test('similarity of [1,2,3], [2,3,4]', function (assert) {
    assert.plan(1);
    var x = [1,2,3];
    var y = [2,3,4];
    assert.equal(dice(x,y), (2 * 2) / (3 + 3));
});

test('similarity of [1,2,3,4,5], [1,2,3,4,5]', function (assert) {
    assert.plan(1);
    var x = [1,2,3,4,5];
    var y = [1,2,3,4,5];
    assert.equal(dice(x,y), 1);
});

test('similarity of [1,2,3,4,5], [3,4,5,6,7]', function(assert) {
    assert.plan(1);
    var x = [1,2,3,4,5];
    var y = [3,4,5,6,7];
    assert.equal(dice(x,y), (2 * 3) / (5 + 5));
});

test('similarity of [1,2,3], [4,5,6]', function(assert) {
    assert.plan(1);
    var x = [1,2,3];
    var y = [4,5,6];
    assert.equal(dice(x,y), 0);
});
