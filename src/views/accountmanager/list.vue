<style scoped>

</style>
<template>
    <div>
        <Breadcrumb>
            <BreadcrumbItem to="/">用户管理</BreadcrumbItem>
            <BreadcrumbItem to="/accountmanager/list">用户列表</BreadcrumbItem>
        </Breadcrumb>
        <!-- 弹窗使用 -->
        <Modal
                v-model="modal1"
                :title="modalTitle">

            <Form :model="formItem" :label-width="80">
                <FormItem label="用户名">
                    <Input v-model="formItem.username" placeholder=""></Input>
                </FormItem>
                <FormItem label="邮箱地址">
                    <Input v-model="formItem.email" placeholder=""></Input>
                </FormItem>
                <FormItem label="电话号码">
                    <Input v-model="formItem.phone" placeholder=""></Input>
                </FormItem>
                <FormItem label="角色">
                    <Select v-model="formItem.role">
                        <Option value="0">超级管理员</Option>
                        <Option value="1">普通管理员</Option>
                        <Option value="2">普通用户</Option>
                    </Select>
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="primary" size="large" long  @click="operate" ref="operate" :whetherType="whetherType">{{ modalBtnText }}</Button>
            </div>
        </Modal>
        <div class="row">
            <label for="email">Email:&nbsp;</label><i-input style="width: 200px;margin-right: 5%" id="email" size="large" placeholder="please enter the email address"></i-input>
            <label for="name">Name:&nbsp;</label><i-input style="width: 200px" id="name" size="large" placeholder="please enter the name"></i-input>
        </div>
        <div style="overflow: hidden">
            <div style="float: left;margin: 10px;">
                <i-button type="primary" @click="showModal">添加</i-button>
                <i-button type="primary" @click="deleteConfirm">删除</i-button>
            </div>
            <div style="float: right;margin: 10px;">
                <i-button type="primary" icon="ios-search">搜索</i-button>
            </div>
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
    // import { fetchList } from "../../api/user";
    import User from "@/mock/user";

    export default {
        data () {
            return {
                //模态框参数
                modal1: false,
                modalTitle: "创建用户",
                modalBtnText: "添加",
                whetherType: "add",
                formItem: {
                    username: '',
                    email: '',
                    phone: '',
                    role: '',
                },
                //列表参数
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
                        align: 'center'
                    },
                    {
                        title: '邮箱',
                        key: 'email',
                        sortable: true,
                        align: 'center',
                    },
                    {
                        title: '用户名',
                        key: 'username',
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
                        align: 'center'
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
                        width: 200,
                        align: 'center',
                        render: (h, params) => {

                            return h('div', [
                                h('i-button',{
                                    style:{
                                        marginRight: '10px'
                                    },
                                    on: {
                                        click: () => {
                                            this.modal1 = true;
                                            this.modalTitle = "编辑用户";
                                            this.modalBtnText = "编辑";
                                            this.whetherType = "edit";
                                            this.formItem.username = params.row.username;
                                            this.formItem.email = params.row.email;
                                            this.formItem.phone = params.row.phone;
                                            let role = params.row.role;
                                            if(role == '超级管理员')
                                                this.formItem.role = '0';
                                            else if(role == '普通管理员')
                                                this.formItem.role = '1';
                                            else
                                                this.formItem.role = '2';
                                        }
                                    }
                                },'详情'),
                                h('i-button',{
                                    on: {
                                        click: () => {
                                            this.$Modal.confirm({
                                                title: '操作提示',
                                                content: '<p>确定是否删除它？</p>',
                                                onOk: () => {
                                                    this.$Message.info('Clicked ok');
                                                },
                                                onCancel: () => {
                                                    this.$Message.info('Clicked cancel');
                                                }
                                            });
                                        }
                                    }
                                },'删除'),
                            ]);

                        },
                    }
                ]
            }
        },
        mounted () {
            //初始化表格数据
            this.computeShowData();
            // //接口请求方式
            // fetchList().then(response => {
            //     console.info(response);
            // });
        },
        methods: {
            //选择是否确认删除
            deleteConfirm () {
                this.$Modal.confirm({
                    title: '操作提示',
                    content: '<p>确定是否删除它？</p>',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
            },
            //模态框弹窗操作功能
            //add
            showModal (){
                this.modal1 = true;
                this.modalTitle = "添加用户";
                this.modalBtnText = "添加";
                this.whetherType = "add";
                this.formItem.username = '';
                this.formItem.email = '';
                this.formItem.phone = '';
                this.formItem.role = '';
            },
            operate () {
                this.modal1 = false;
                //具体操作
                let operateType = this.$refs.operate.$attrs.whetherType;
                if(operateType == 'add'){

                }else if(operateType == 'edit'){

                }
            },
            //模拟获取数据
            mockTableData () {
                // let data = [];
                // for (let i = 0; i < 100; i++) {
                //     data.push({
                //         id: '',
                //         status: Math.round(Math.random()) == 1 ? "正常" : "不正常",
                //         email: new Date().getTime() + "@test.com",
                //         username: new Date().getTime() + "test.com",
                //         phone: new Date().getTime() + 1,
                //         role: Math.round(Math.random()) == 0 ? "超级管理员" : "普通管理员",
                //         createTime: this.formatDate(new Date()),
                //     })
                // }
                return User.getList();
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
