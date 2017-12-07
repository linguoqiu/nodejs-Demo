/*
**  展示session的简单用法
*/

const express = require('express')
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var server = express()


server.use(cookieParser())
// name可以修改session在cookie中的名字，默认未seesion
// keys key数组,数组越大，越复杂，则安全性越高
// maxAge session的有效时间，越大越不安全，服务器耗资源更多
server.use(cookieSession({
    name: 'sess',
    keys: ['aaa','bbb','ccc'],
    maxAge: 2*3600*1000
}))

server.use('/', function(req, res) {
    // 请求一次，count+1
    if(req.session['count'] = null){
        req.session['count'] = 1;
    } else {
        req.session['count']++;
    }

    console.log(req.session['count']);

    res.send('ok')
})

server.listen(8080)