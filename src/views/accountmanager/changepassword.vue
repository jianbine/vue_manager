<style scoped>
    .row label{
        display: inline-block;
        width: 70px;
        text-align: right;
    }
</style>
<template>
    <div>
        <Breadcrumb>
            <BreadcrumbItem to="/">用户管理</BreadcrumbItem>
            <BreadcrumbItem to="/accountmanager/changepassword">修改密码</BreadcrumbItem>
        </Breadcrumb>
        <div>
            <div class="row">
                <label>原始密码：</label>
                <Input type="password" prefix="ios-contact" placeholder="请输入原始密码" style="width: auto" />
            </div>
            <div class="row">
                <label>新密码：</label>
                <Input type="password" prefix="ios-contact" placeholder="请输入请密码" style="width: auto" />
            </div>
            <div class="row">
                <label>确认密码：</label>
                <Input type="password" prefix="ios-contact" placeholder="请输入确认密码" style="width: auto" />
            </div>
            <div class="row">
                <Button type="primary">提交</Button>
                <Button type="default">取消</Button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                test: true
            }
        },
        methods: {

        },
        computed: {

        }
    }
</script>