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
/**
 * @description 模拟按页加载，减小数据库的压力
 * obj对象
 * @param start 起始数
 * @param showItemCount 每页几条页数
 * ...
 * @return obj--total:总条数--rows:列表详情
 */
export default {
    getList: () => {
        return List;
    },
    getListByCondition: (obj = {}) => {
        let results = [];
        let rows = [];
        let start = obj.start;
        let showItemCount = obj.showItemCount;

        if(start >= 0 && showItemCount >= 0){
            rows = List.slice(start, start + showItemCount);
        }else{
            rows = List;
        }

        let total = List.length;
        results.total = total;
        results.rows = rows;
        return results;
    }
}