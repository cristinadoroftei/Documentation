const express = require("express");

const app = express();
const fs = require('fs')
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

fs.readFile('./public/data.json', 'utf8', function(error, data){
    userObj = JSON.parse(data)
});

app.locals.data = require('./public/data.json')

app.get('/', (req, res) => {
    return res.sendFile('./index.html');
})

app.get('/data', (req,res) => {
    console.log('sss')
    return res.send({})
})

const server = app.listen(4000, error => {
    if(error){
        console.log(error)
    }
    console.log('Server running on port ' , server.address().port)
})