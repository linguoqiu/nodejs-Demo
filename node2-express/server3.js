// 此js展示链式操作
// 如果有next()的话，会执行下一个use，如果没的话会直接返回

const express = require('express');
const bodyParser = require('body-parser');

var server = express();
server.listen(8080);

server.use('/', function (req, res) {
    console.log('a');
    // 链式操作，执行下一步
    next();
})


server.use('/', function(req, res) {
    console.log('b');
})