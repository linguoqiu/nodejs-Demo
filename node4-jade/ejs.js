//  展示ejs 模块的简单的用法

const ejs = require('ejs');

ejs.renderFile('./views/1.ejs', {name: 'red'}, function(err, data) {
    if (err) {
        console.log('编译失败')
    }else {
        console.log(dara)
    }
})