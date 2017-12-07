/*
**  展示cookie的删除用法
*/

const express = require('express');
const cookieParser = require('cookie-parser');

var server = express();

server.use(cookieParser('wesdfw4r34tf'))

server.use('/',function(req, res){
    res.clearCookie('user');

    res.send('ok')
})


server.listen(8080)