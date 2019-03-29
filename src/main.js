import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';

import VueI18n from 'vue-i18n';
import Locales from './locale';
import zhLocale from 'iview/src/locale/lang/zh-CN';
import enLocale from 'iview/src/locale/lang/en-US';

import { getToken } from '@/utils/auth.js';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(iView);

// 自动设置语言
const navLang = navigator.language;
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
const lang = window.localStorage.getItem('language') || localLang || 'zh-CN';

Vue.config.lang = lang;

// 多语言配置
const locales = Locales;
const mergeZH = Object.assign(zhLocale, locales['zh-CN']);
const mergeEN = Object.assign(enLocale, locales['en-US']);
Vue.locale('zh-CN', mergeZH);
Vue.locale('en-US', mergeEN);


// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

const whiteList = ['/login'];
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();

    Util.title(to.meta.title);

    const hasToken = getToken();

    if(hasToken){
        let pathname = to.path;
        if(pathname == '/'){
            next({name:'board'});
        }
        next();
    }else{

        if(to.path == '/') {
            next({ path: '/login' });
        }
        //如果再白名单内，直接打开页面
        if(whiteList.indexOf(to.path) > -1) {
            next();
        }else{
            next({ path: '/login' });
        }
            // console.info()
        // if(to.path == '/' || whiteList.indexOf(to.path) > -1){
        //     // next({ path: '/login' });
        // }else{
        //     console.info(to.path);
        //     next({ path: '/' });
        // }
        // let pathname = to.path;
        // if(pathname == '/'){
        //     next('/board');
        // }else{
        //     next();
        // }
    }

    // //设定默认路由
    // let pathname = to.path;
    // if(pathname == '/'){
    //     next('/board');
    // }

});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});


const store = new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
});


new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});