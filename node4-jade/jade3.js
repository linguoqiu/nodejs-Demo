const jade = require('jade');
const fs = require('fs');

// 从./views/2.jade渲染到str
var str = jade.renderFile('./views/2.jade',{pretty: true});

//  将str写入懂啊./build/2.html
fs.writeFile('./build/2.html', str, function(err) {
    if(err){
        console.log('写入失败');
    } else {
        console.log('写入成功');
    }
})