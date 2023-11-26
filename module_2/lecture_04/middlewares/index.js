const e = require('express');
const express = require('express');

const app = express();

app.use(function(req, res, next) {

    console.log(req.headers);
    if (req.headers.authorization) {
        const [type, token] = req.headers.authorization.split(' ');
        if(type === "Basic"){
            const [username, password] = Buffer.from(token, 'base64').toString().split(':');
            console.log(username, password);
            next();
        }
    } else {
        res.status(401).send({ message: 'Unauthorized' });
    }
});

app.get('/', function(req, res, next) {
    res.send('Hello from home!');
    
});

app.listen(5000, function() {
    console.log('Server is listening on port 5000');
});