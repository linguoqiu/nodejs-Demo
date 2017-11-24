const express = require('express');
//  加载自己写的中间件
const bodyParser2 = require('./libs/my-body-parser');

var server = express();
server.listen(8080);

server.use(bodyParser2);

server.use('/', function (req, res) {
    console.log(req.body);
})