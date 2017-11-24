const express = require('express');
const querystring = require('querystring');
const bodyParser = require('body-parser');

var server = express();
server.listen(8080)

/*
* 展示body-parser的原理，利用链式操作实现
server.use(function (req, res, next){
  var str='';
  req.on('data', function (data){
    str+=data;
  });
  req.on('end', function (){
    req.body=querystring.parse(str);

    next();
  });
});
*/

server.use('/', function (req, res) {
    console.log(req.body)
})