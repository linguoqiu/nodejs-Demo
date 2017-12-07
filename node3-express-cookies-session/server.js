/*
**  展示cookie的简单用法
*/

const express = require('express');

var server= express();

// 设置cookie
server.use('/aaa/a.html', function(req, res) {
    // 只有path:'/aaa'下才设置，maxAgecookie的有效时间 ms
    res.cookie('user','blue',{path:'/aaa',maxAge:30*24*3600*1000});

    res.send('ok');
})

server.listen(8080)

