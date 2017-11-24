const express = require('express');

var server = express();

// get请求的响应方法
server.get('/',  function(){
    console.log('get methods')
});
// post请求的响应方法
server.post('/', function(){
    console.log('post methods')
});
// get或者post请求的响应方法
server.use('/', function(){
    console.log('get or post methods')
});

// 设置监听端口
server.listen(8080);