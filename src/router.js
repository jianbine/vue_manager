const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve),
    children: [
        {
            path: '/board',
            name: 'board',
            meta: {
                title: '面板中心'
            },
            component: (resolve) => require(['./views/board/index.vue'], resolve)
        },{
            path: '/accountmanager/list',
            name: 'accountlist',
            meta: {
                title: '用户列表'
            },
            component: (resolve) => require(['./views/accountmanager/list.vue'], resolve)
        }
    ]
},{
    path: '/login',
    meta: {
        title: '登录界面'
    },
    component: (resolve) => require(['./views/login.vue'], resolve)
},{
    path: '*',
    meta: {
        title: '404错误'
    },
    component: (resolve) => require(['./views/errors/error404.vue'], resolve)
}];
export default routers;