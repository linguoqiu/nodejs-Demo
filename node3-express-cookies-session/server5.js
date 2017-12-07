/*
**  展示cookie-session的用法，读取session
*/

const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var server = express();

server.use(cookieParser());
// session加密的key数组,数组越大，越复杂，session就越难破解
server.use(cookieSession({
    keys:['aaa','bbb','ccc']
}))

server.use('/', function(req, res) {
    // 读取session
    console.log(req.session);

    res.send('ok');
})


server.listen(8080);