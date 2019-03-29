<style scoped>
    .login-box{
        position: absolute;
        left: 0;
        right: 0;
        top: -200px;
        bottom: 0;
        margin: auto;
    }
    .sp1{
        display: inline-block;
        width: 60px;
        text-align: left;
    }
</style>
<template>
    <Card class="login-box" style="width:350px;text-align: center;height: 255px;" :padding="30" title="欢迎使用管理系统">
        <Input type="text" size="large" v-model="username">
            <span slot="prepend" class="sp1">用户名：</span>
        </Input>
        <br>
        <Input type="password" size="large" v-model="password">
            <span slot="prepend" class="sp1">密码：</span>
        </Input>
        <br>
        <Button long size="large" @click="login()">登&nbsp;&nbsp;录</Button>
    </Card>
</template>
<script>

    import Account from '@/mock/account';
    import md5 from 'js-md5';
    import { setToken } from '@/utils/auth';

    export default {
        data () {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            error (nodesc) {
                this.$Notice.error({
                    title: '错误信息',
                    desc: nodesc ? nodesc : 'Here is the notification description. Here is the notification description. '
                });
            },
            login () {
                let accountList = Account.getAccountList();
                let username = this.username;
                let password = md5(this.password);
                let loginInfo;
                accountList.forEach(function (obj, index) {
                    if(obj.username == username && obj.password == password){
                        loginInfo = obj;
                        return false;
                    }
                });
                if(!loginInfo){
                    this.error('用户名或密码不正确!');
                   return false;
                }
                //如果用户存在，进入到首页
                //存储当前用户信息，并登录到首页
                let tokenStatus = setToken(username);
                this.$router.push({ path:"/" });
            }
        },
        computed: {

        }
    }
</script>