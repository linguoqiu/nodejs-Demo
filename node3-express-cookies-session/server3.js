/*
**  展示cookie的签名的设置用法和读取的方法
**  签名只能做到防止篡改的效果，没加密的效果
*/

const express = require('express')
const cookieParser = require('cookie-parser')

var server = express()

// 带的字符串为签名字符串
server.use(cookieParser('udhsidhusfhfehf'))

server.use('/', function(req, res) {
    // 和server.use(cookieParser('udhsidhusfhfehf')) 一致
    req.secret= 'udhsidhusfhfehf';
    res.cookie('user','blue',{signed: true});

    // 获取签名的和未签名的需要分开读取
    console.log('签名cookie：', req.signedCookies);
    console.log('无签名cookie：', req.cookies);

    res.send('ok');
})

server.listen(8080);