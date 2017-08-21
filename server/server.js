const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Mike',
    age: 27
  }, {
    name: 'Jawann',
    age: 31
  }, {
    name: 'Jen',
    age: 26
  }]);
});
// GET /users
// Give users a name prop and age prop

app.listen(9000, () => {
	console.log('Listening on 9000')
});
module.exports.app = app;