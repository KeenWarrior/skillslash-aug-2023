const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from skillslash!');
});

app.get('/users/:username/repositories/:repoid', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.headers);
    res.send('Hello from skillslash!');
});

app.listen(PORT, () => {
    console.log('Example app listening on port '+ PORT);
});


// GET - Read (Idempotent)
// POST - Create (Non-Idempotent)
// PUT - Complete Update / Replace (Idempotent)
// DELETE - Delete (Idempotent)
// PATCH - Partial Update (Idempotent)


// CRUD - Create, Read, Update, Delete
// REST - Representational State Transfer
// SOAP - Simple Object Access Protocol (This is older way of doing things)
// CRUD and REST are terms to remember.


// http://api.example.com/getRepositories?username=keenwarrior


// http://api.example.com/keenwarrior/repositories/
// http://api.example.com/keenwarrior/followers/
// http://api.example.com/keenwarrior/gists/
// http://api.example.com/keenwarrior/gists/2334
// http://api.example.com/keenwarrior/repositories/2334
// http://api.example.com/keenwarrior/skillslash


// POST - http://api.example.com/users/
// GET - http://api.example.com/users/
// GET - http://api.example.com/users/keenwarrior
// PUT - http://api.example.com/users/keenwarrior
// PATCH - http://api.example.com/users/keenwarrior
// DELETE - http://api.example.com/users/keenwarrior


// POST - http://api.example.com/users/keenwarrior/repositories
// GET - http://api.example.com/users/keenwarrior/repositories
// GET - http://api.example.com/users/keenwarrior/repositories/2334
// PUT - http://api.example.com/users/keenwarrior/repositories/2334
// PATCH - http://api.example.com/users/keenwarrior/repositories/2334
// DELETE - http://api.example.com/users/keenwarrior/repositories/2334

// keenwarrior and 2334 are examples of path parameters.

// we can also have query parameters.


// http://api.example.com/keenwarrior/repositories/?page=1&limit=10




