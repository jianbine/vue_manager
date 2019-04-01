import Mock from 'mockjs';

const List = [
    {
        id: '5',
        uid: '26042702139228165',
        username: 'admin',
        password: 'e10adc3949ba59abbe56e057f20f883e',
        urole: '0',//超级管理员
        status: '1',//1激活
        regtime: '2019-03-11 03:06:59'
    },
    {
        id: '6',
        uid: '26042702139228166',
        username: 'mibine',
        password: 'e10adc3949ba59abbe56e057f20f883e',
        urole: '1',//普通管理员
        status: '1',
        regtime: '2019-03-12 04:06:59'
    },
    {
        id: '7',
        uid: '26042702139228167',
        username: 'test',
        password: 'e10adc3949ba59abbe56e057f20f883e',
        urole: '2',//普通用户
        status: '1',
        regtime: '2019-03-22 06:06:59'
    }
];

export default {
    getAccountList () {
        return List;
    }
}