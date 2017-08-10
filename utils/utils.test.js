const expect = require('expect')

const utils = require('./utils')

it('should add two numbers', () => {
	var res = utils.add(33, 11)
	expect(res).toBe(44, ['Woooo'])
});

it('should square a number', () => {
	var res = utils.square(5)
	if (res != 25) {
		throw new Error(`Expected 25, but got ${res}`)
	}
})