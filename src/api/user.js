import request from './../utils/request';

export function fetchList() {
    return request({
        url: '/user/list',
        method: 'get',
        params: ''
    });
}
