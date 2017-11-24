const express = require('express')

var server = express();
server.listen(8080);

// get,post
server.use('/', function (req, res) {
    console.log(req.query); //get
})