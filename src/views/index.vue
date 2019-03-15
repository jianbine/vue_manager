<style scoped>
    .layout-con{
        height: 100%;
        width: 100%;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Sider collapsible :collapsed-width="78" v-model="isCollapsed">

                <div style="height: 64px;
                    color: white;
                    text-align: center;
                    font-size: 42px;
                    border-bottom: 1px solid;">
                    Logo
                </div>
                <Menu theme="dark" width="auto"
                      :class="menuitemClasses"
                      :accordion="true"
                      active-key="0"
                      :open-keys="[0]">
                    <template v-for="(item,index) in menus">
                        <Submenu :key="index" :name="index">
                            <template slot="title">
                                <Icon :type="item.image"></Icon>
                                {{ item.name }}
                            </template>
                            <template v-for="(smallItem,index1) in item.children">
                                <router-link :to="{ name: smallItem.urlName}">
                                    <Menu-item :name="smallKey(index,index1)" :key="smallKey(index,index1)">
                                        <!--{{ smallItem.name }}-->
                                        {{ smallItem.name }}
                                    </Menu-item>
                                </router-link>
                            </template>
                        </Submenu>
                    </template>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                    <div>
                        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                        <span>jerry@mibine.com</span>
                        <!-- <Icon type="ios-checkmark" /> -->
                    </div>
                    <div>
                    </div>
                </Header>
                <Content :style="{padding: '16px'}">
                    <Card>
                        <!--<div style="height: 600px">Content</div>-->

                        <router-view></router-view>
                    </Card>
                </Content>
                
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                //用来左边菜单栏关闭显示
                isCollapsed: false,
                menus: [{
                    name: "面板",
                    image: "ios-people",
                    language: "xxxx",
                    leaf: false,
                    root: true,
                    show: true,
                    children: [{
                        name: "面板中心",
                        image: "ios-people",
                        language: "xxxx",
                        leaf: false,
                        root: true,
                        show: true,
                        url: '/board',
                        urlName: 'board'
                    }]
                },{
                    name: "用户管理",
                    image: "ios-people",
                    language: "xxxx",
                    leaf: false,
                    root: true,
                    show: false,
                    children: [{
                        name: "用户列表",
                        image: "ios-people",
                        language: "xxxx",
                        leaf: false,
                        root: true,
                        show: true,
                        url: '/accountmanager/list',
                        urlName: 'accountlist'
                    },{
                        name: "修改密码",
                        image: "ios-people",
                        language: "xxxx",
                        leaf: false,
                        root: true,
                        show: true,
                        url: '/board'
                    }]
                },{
                    name: "图表",
                    image: "ios-people",
                    language: "xxxx",
                    leaf: false,
                    root: true,
                    show: false,
                },{
                    name: "列表",
                    image: "ios-people",
                    language: "xxxx",
                    leaf: false,
                    root: true,
                    show: false,
                },{
                    name: "组件",
                    image: "ios-people",
                    language: "xxxx",
                    leaf: false,
                    root: true,
                    show: false,
                    children: [{
                        name: "表单",
                        image: "ios-people",
                        language: "xxxx",
                        leaf: false,
                        root: true,
                        show: true,
                    },{
                        name: "视图",
                        image: "ios-people",
                        language: "xxxx",
                        leaf: false,
                        root: true,
                        show: true,
                    }]
                }]
            };
        },
        methods: {
            smallKey: function (key1, key2) {
                return key1 + "-" +key2
            }
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
        }
    }
</script>