const jade = require('jade');

// pretty html格式化
var str = jade.renderFile('./views/8.jade', {pretty: true});

console.log(str)