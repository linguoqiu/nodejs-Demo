// demo展示使用express响应请求和使用expressStatic中间件
const express = require('express');
const expressStatic = require('express-static');

var server = express();
server.listen(8080);

// 用户模拟数据
var users ={
    'blue': "123456",
    'zhangsan': '654321',
    'lisi': '987654'
}

server.get('/login', function(req, res) {
    // 获取请求的user和pass
    var user = req.query['user'];
    var pass = req.query['pass'];

    if (users[user] == null ) {
        // 返回数据
        res.send({
            ok: false,
            msg: '此用户不存在'
        })
    }else {
        if (users[user] != pass) {
            res.send({
                ok: false,
                msg: '密码错了'
            })
        } else {
            res.send({
                ok:true,
                msg: '成功'
            })
        }
    }
});

// 如果发过来的不是请求接口，则导向到./www的静态资源
server.user(expressStatic('./www'))