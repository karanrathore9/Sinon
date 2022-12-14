const assert = require('assert');
const greeter = require('../greeter.js');
const sinon = require('sinon');

describe('testing the greeter', function() {
	it('checks the greet function', function() {
    let clock = sinon.useFakeTimers(new Date(2021, 0, 15));
		assert.equal(greeter.greet('Karan'), 'Hello, Karan! Today is Friday, January 15, 2021.');
    clock.restore();
    
	});
});
