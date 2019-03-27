<style>
    .bg404{
        background-color: rgb(55,162,218) !important;
    }
    .img404{
        position: absolute;
        left: 0;
        right: 0;
        top: -150px;
        bottom: 0;
        margin: auto;
    }
</style>
<template>
    <div class="bg">
        <img class="img404" src="/static/errors/404page.png" alt="">
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: "找不到当前页面"
            }
        },
        beforeCreate: function() {
            document.getElementsByTagName("body")[0].className="bg404";
        },
        beforeDestroy: function() {
            document.body.removeAttribute("class","bg404");
        },
        methods: {

        },
        computed: {

        }
    }
</script>