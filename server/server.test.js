const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;


// server
//GET /
//some test case
//GET /users 
//some test case

describe('server', () => {
    describe('#get /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .end(done);
        });
    })

    describe('#get /users', () => {
        it('should return my user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Jawann',
                        age: 31
                    });
                })
                .end(done);
        });
    })
});