import Mock from 'mockjs';

const List = [];
const count = 100;

for (let i = 0; i < count; i++){
    List.push(Mock.mock({
        id: '@increment',
        'status|1': ['正常','不正常'],
        email: '@increment' + "@test.com",
        username: '@first',
        phone: +Mock.Random.date('T'),
        'role|1': ['超级管理员','普通管理员'],
        createTime: Mock.Random.date() + ' ' + Mock.Random.time(),
    }));
}

export default {
    getList: () => {
        return List;
    }
}