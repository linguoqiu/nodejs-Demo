/*
**  展示session的简单用法,设置详细的随机的key，设置、读取、删除session
*/

const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var server = express();


var arr= []

for(var i = 0; i< 100000; i++){
    arr.push('sig_' + Math.random());
}

server.use(cookieParser());
server.use(cookieSession({
    name: 'sess',
    keys: arr,
    maxAge: 2*3600*1000
}))

server.use('/', function(req, res) {
    //  设置session
    if(req.session['count'] == null) {
        req.session['count']=1;
    } else {
        req.session['count']++;
    }

    console.log(req.session['count']);

    res.send('ok');
    // 删除 session
    // delete req.session
});


server.listen(8080)
