let path = require('path');
console.log(path.resolve(__dirname, './app/main.js'));
module.exports = {
    entry: path.resolve(__dirname, './app/main.js'), //入口文件
    output: {
        path: path.join(__dirname, '/index'), //打包后的文件存放地方
        filename: 'bundle.js' //打包后输出的文件
    }
}