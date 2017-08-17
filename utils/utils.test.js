const expect = require('expect')

const utils = require('./utils')

it('should add two numbers', () => {
	var res = utils.add(33, 11)
	expect(res).toBe(44).toBeA('number')
	// if (res != 44) {
	// 	throw new Error(`Expected 44, but got ${res}`)
	// }
});

it('should square a number', () => {
	var res = utils.square(5)
	expect(res).toBe(25).toBeA('number')
	// if (res != 25) {
	// 	throw new Error(`Expected 25, but got ${res}`)
	// }
})

it('should async add two numbers', () => {
	utils.asyncAdd(4, 3, (sum) => {
		expect(sum).toBe(7).toBeA('number')
	})
})

// it('should set the first and last name', () => {
// 	var user = {location: 'New York', age: 25};
// 	var res = utils.setName(user, 'Jawann Carmona')
// 	expect(user).toBe('Jawann Carmona').toBeA('string')
// })

