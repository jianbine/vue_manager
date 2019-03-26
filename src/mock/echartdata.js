import Mock from 'mockjs';

export default {
    //获取cpu使用率
    getCpuData: () => {
        let List = [
            {value:Math.round(Math.random() * 100), name:'已使用', selected:false},
            {value:Math.round(Math.random() * 100), name:'未使用'}
        ];
        return List;
    },
    //获取内存使用率
    getMemoryData: () => {
        let List = [
            {value:Math.round(Math.random() * 100), name:'已使用', selected:false},
            {value:Math.round(Math.random() * 100), name:'未使用'}
        ];
        return List;
    },
    //获取硬盘使用率
    getStorageData: () => {
        let List = [
            {value:Math.round(Math.random() * 50), name:'已使用', selected:false},
            {value:Math.round(Math.random() * 100), name:'未使用'}
        ];
        return List;
    },
    //获取用户使用情况
    getUseData: () => {
        let List = {
            useList: ['用户1', '用户2','用户3','用户4','用户5','用户6'],
            data: [
                Math.round(Math.random() * 50),
                Math.round(Math.random() * 50),
                Math.round(Math.random() * 50),
                Math.round(Math.random() * 50),
                Math.round(Math.random() * 50),
                Math.round(Math.random() * 50)
            ]
        };
        return List;
    },
    //获取网络流量
    getNetworkData: () => {
        let List = {
            upData: [
                Math.round(Math.random() * 500),
                Math.round(Math.random() * 500),
                Math.round(Math.random() * 500),
                Math.round(Math.random() * 500),
                Math.round(Math.random() * 500),
                Math.round(Math.random() * 500)
            ],
            downData: [
                Math.round(Math.random() * 500),
                Math.round(Math.random() * 500),
                Math.round(Math.random() * 500),
                Math.round(Math.random() * 500),
                Math.round(Math.random() * 500),
                Math.round(Math.random() * 500)
            ]
        };
        return List;
    }
}