<style scoped>

</style>
<template>
    <div>
        <div>
            <label for="email">Email:&nbsp;</label><i-input style="width: 200px;margin-right: 5%" id="email" size="large" placeholder="please enter the email address"></i-input>
            <label for="name">Name:&nbsp;</label><i-input style="width: 200px" id="name" size="large" placeholder="please enter the name"></i-input>
        </div>
        <div style="text-align: right;margin: 10px 0px;">
            <i-button type="primary" icon="ios-search">搜索</i-button>
        </div>
        <i-table :content="self" :data="showDatas" :columns="tableColumns" stripe border ></i-table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="computeDataTotal" :current="currentPage" @on-change="changePage"></Page>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                self: this,
                tableData: this.mockTableData(),
                pageTotal: 0,
                currentPage: 1,
                showItemCount: 10,
                showDatas: [],
                tableColumns: [
                    {
                        title: '选中框',
                        key: 'select',
                        type: 'selection',
                        width: 58,
                        align: 'center',
                    },
                    {
                        title: '状态',
                        key: 'status',
                        sortable: true,
                        align: 'center',
                        // render (row) {
                        //     return row.status;
                        // }
                    },
                    {
                        title: '邮箱',
                        key: 'email',
                        sortable: true,
                        align: 'center',
                    },
                    {
                        title: '手机号码',
                        key: 'phone',
                        sortable: true,
                        align: 'center',
                    },
                    {
                        title: '角色',
                        key: 'role',
                        sortable: true,
                        align: 'center',
                        // render (row) {
                        //     return `普通用户`
                        // }
                    },
                    {
                        title: '创建时间',
                        key: 'createTime',
                        sortable: true,
                        align: 'center',
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render (row, column, index) {
                            return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
                        }
                    }
                ]
            }
        },
        mounted () {
            //初始化表格数据
            this.computeShowData();
        },
        methods: {
            //模拟获取数据
            mockTableData () {
                let data = [];
                for (let i = 0; i < 100; i++) {
                    data.push({
                        select: '',
                        status: Math.round(Math.random()) == 1 ? "正常" : "不正常",
                        email: new Date().getTime() + "@test.com",
                        phone: new Date().getTime() + 1,
                        role: Math.round(Math.random()) == 0 ? "超级管理员" : "普通管理员",
                        createTime: this.formatDate(new Date()),
                        action: '',
                    })
                }
                return data;
            },
            //格式化日期
            formatDate (date) {
                const y = date.getFullYear();
                let m = date.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                return y + '-' + m + '-' + d;
            },
            //点击改变页码
            changePage (index) {
                this.currentPage = index;
                this.computeShowData();
            },
            //要显示的数据
            computeShowData () {
                let current = this.currentPage;
                let showItemCount = this.showItemCount;
                let start = (current - 1) * showItemCount;
                let end = start + showItemCount;
                console.log("当前页数" + current);
                this.showDatas = this.tableData.slice(start, end);
            },
        },
        computed: {
            //获取列表总页数
            computeDataTotal () {
                return this.tableData.length;
            },
        }
    }
</script>
