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

2、

问题：ivew table i-button组件使用没有任何效果

解决方法：

采用箭头函数方式替代原有官方写法

官方写法：

````
render (row, column, index) {
    return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
},
````

替换后写法：

````
render: (h, params) => {
    return h('div', [
    h('i-button',{
        style:{
            marginRight: '10px'
        }
    },'查看详情'),
    h('i-button','删除'),
    ]);
},
````

3、

问题：打包部署后部署在服务器上404

原因：iView原来默认配置是使用history模式的router，可以在main.js文件中查看配置

分析：history模式访问的url不带#，而hash模式的url访问都会带#

解决方法：

如果使用history模式，需要配置服务端，详细见https://router.vuejs.org/zh/guide/essentials/history-mode.html

如果使用hash模式，就不需要配置服务端，只是url中带#显得奇怪

4、

问题：本地静态资源引用问题

分析：本地资源一般分为assets和static(和src同级)目录，在不同目录下有的区别是：assets可以使用相对路径，但是webpack需引入url-loader，而static路径则不一样，用绝对路径即可。

解决方法：

assets目录：引入url-loader插件（待补充）

static目录使用绝对路径，如：/static/xxxxx（此项目可以参考管理系统右上方avator引用）

5、

问题：修改页面body样式

解决方法：

通过生命周期中的beforeCreate和beforeDestroy两个阶段，分别为body元素添加class样式和去除class样式

# 问题记录
1、左侧菜单栏打开不能用（解决）

2、vue-router的初步使用（解决）

3、后期数据用mock.js模拟请求使用（插件已引入，解决）

4、用户列表操作项无法显示（解决）

5、用户列表实现分页（解决）

6、表格点击分页时，底部页数会减少（解决，splice改用slide）

7、获取当前元素的属性（使用ref,给相应的元素加ref=“name” 然后再this.$refs.name获取到该元素）

8、改动全局前置守卫，配置默认加载路由（解决）

9、用户列表搜索按钮功能添加

10、图表Demo创建（ECharts|Highcharts -- 解决）

11、登陆界面编写（解决）

12、注册界面编写

13、忘记密码界面编写

14、角色权限控制

15、菜单栏界面优化（菜单栏缩进，logo变小）

16、MockJS的使用（解决，在用户列表demo使用到）

17、vue-lazyload使用

18、iView 升级到3.0+版本

19、模拟API接口请求

20、页面校验机制总结

21、404页面优化编写（初步想法，直接404图片引用，解决）

22、webpack-dev-server 版本警告
 
23、通过配置文件区分开发环境和生产环境（解决）

24、自定义icon图标

25、面板中心改成监测中心（解决）

26、本地资源引用（解决）

27、全局配置@替代src绝对路径（解决）

28、自定义模态框组件，模拟alert弹窗

29、i18n使用
