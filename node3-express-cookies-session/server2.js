/*
**  展示使用cookie-parser获取到cookie
*/

const express = require('express');
const cookieParser = require('cookie-parser');

var server = express();

server.use(cookieParser())

// 获取cookie
server.use('/',function(req, res) {
    console.log(req.cookies);

    res.send('ok')
});

server.listen(8080);