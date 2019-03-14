const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
    path: '/login',
    meta: {
        title: '登录界面'
    },
    component: (resolve) => require(['./views/login.vue'], resolve)
},{
    path: '/board',
    meta: {
        title: '面板中心'
    },
    component: (resolve) => require(['./views/board/index.vue'], resolve)
},{
    path: '/accountmanager/list',
    meta: {
        title: '用户列表'
    },
    component: (resolve) => require(['./views/accountmanager/list.vue'], resolve)
}];
export default routers;