# vue_manager
Vue后台管理实战

# 安装方式
1、安装依赖
$ npm install
2、开发环境
$ npm run dev
(访问地址：http://127.0.0.1:8080)
3、编译打包（生产环境）
npm run build

# 踩坑记录
1、
报错：@1.0.0 dev: `webpack-dev-server --content-base ./ --open --inline --hot --compress --history-api-fallback --config webpack.dev.config.js`
原因：node版本(v10.15.3)太高
解决方法两个：
(1)降低node版本
(2)修改node fs.write模块的是使用方法