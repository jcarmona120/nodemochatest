const expect = require('expect')
const rewire = require('rewire')

//rewire calls files like require but adds 2 arguments(__set__ and __get__)
var app = rewire('./app')

describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    }
    app.__set__('db', db)

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Jawann', 31);
        expect(spy).toHaveBeenCalledWith('Jawann', 31)
    })

    it('should call saveUser with user object', () => {
        var email = 'jawann@example.com';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    });

})