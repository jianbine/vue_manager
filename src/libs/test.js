import request from './request.js'
let ajaxService = {

};

//使用
ajaxService.getlist = function(params){
  return request({
    url: 'getlist',
    method: 'get',
    params
  });
};

export default ajaxService;