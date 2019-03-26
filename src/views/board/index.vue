<style scoped>
    .card_box{
        padding: 10px;
    }
    .server_status{
        display: inline-block;
        width: 280px;
        height: 280px;
    }
    .network_status{
        width: 90%;
        height: 300px;
    }
    .use_status{
        width: 95%;
        height: 300px;
    }
</style>
<template>
    <div>
        <label>系统：Windows 10&nbsp;&nbsp;&nbsp;&nbsp;当前时间：{{ currentTime }}&nbsp;&nbsp;&nbsp;&nbsp;版本：0.0.1</label>
        <Row>
            <i-col class="card_box" span="24">
                <Card>
                    <p slot="title">服务器状态</p>
                    <div class="server_status" id="cpu"></div>
                    <div class="server_status" id="memory"></div>
                    <div class="server_status" id="storage"></div>
                </Card>
            </i-col>
        </Row>
        <Row>
            <i-col class="card_box" span="12">
                <Card>
                    <p slot="title">用户使用情况</p>
                    <div class="use_status" id="use"></div>
                </Card>
            </i-col>
            <i-col class="card_box" span="12">
                <Card>
                    <p slot="title">网络流量</p>
                    <div class="network_status" id="network"></div>
                </Card>
            </i-col>
        </Row>
    </div>
</template>

<script>
    import echarts from 'echarts';
    import EchartData from '@/mock/echartdata';

    export default {
        data () {
            return {
                test: true,
                currentTime: this.formatDate(new Date()),
                intval:'',
                cpuIntval:'',
                cpuChart:'',
                memoryIntval:'',
                memoryChart:'',
                storageIntval:'',
                storageChart:'',
                networkIntval:'',
                networkChart:'',
                useIntval:'',
                useChart:''
            }
        },
        mounted (){
            //更新页面的时候，请定时器
            clearInterval(this.intval);
            //开启定时器
            this.setIntervalTime();
            //初始化图标
            this.initCpuEchart();
            this.initMemoryEchart();
            this.initStorageEchart();
            this.initUseEchart();
            this.initNetworkEchart();
        },
        methods: {
            //格式化日期
            formatDate (date) {
                const y = date.getFullYear();
                let m = date.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                let h = date.getHours();
                h = h < 10 ? '0' + h : h;
                let min = date.getMinutes();
                min = min < 10 ? '0' + min : min;
                let s = date.getSeconds();
                s = s < 10 ? '0' + s : s;
                return y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + s;
            },
            //定时器
            setIntervalTime () {
                let _this = this;
                this.intval = setInterval(function () {
                    let date = new Date();
                    _this.currentTime = _this.formatDate(date);
                },1000);
            },
            //初始化cpu图表
            initCpuEchart () {
                this.cpuChart = echarts.init(document.getElementById('cpu'));
                this.cpuChart.setOption({
                    title : {
                        text: 'CPU使用率',
                        x:'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    color: ['rgb(55,162,218)', 'rgb(255,237,101)'],
                    series: [
                        {
                            name:'CPU使用率',
                            type:'pie',
                            selectedMode: 'single',
                            radius: [0, '70%'],
                            //饼图内部是否环形和饼图大小
                            label: {
                                normal: {
                                    position: 'inner'
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:EchartData.getCpuData()
                        }
                    ]
                });

                //开启图表定时器
                clearInterval(this.cpuIntval);
                this.setIntervalCpu();
            },
            //定时刷新cpu数据
            setIntervalCpu () {
                let _this = this;
                this.cpuIntval = setInterval(function () {
                    if(_this.cpuChart){
                        let option = _this.cpuChart.getOption();
                        option.series[0].data = EchartData.getCpuData();
                        _this.cpuChart.setOption(option);
                    }
                },2000);
            },
            //初始化内存图表
            initMemoryEchart () {
                this.memoryChart = echarts.init(document.getElementById('memory'));
                this.memoryChart.setOption({
                    title : {
                        text: '内存使用率',
                        x:'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    color: ['rgb(55,162,218)', 'rgb(255,237,101)'],
                    series: [
                        {
                            name:'内存使用率',
                            type:'pie',
                            selectedMode: 'single',
                            radius: [0, '70%'],
                            //饼图内部是否环形和饼图大小
                            label: {
                                normal: {
                                    position: 'inner'
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: EchartData.getMemoryData()
                        }
                    ]
                });

                //开启图表定时器
                clearInterval(this.memoryIntval);
                this.setIntervalMemory();
            },
            //定时刷新内存数据
            setIntervalMemory () {
                let _this = this;
                this.memoryIntval = setInterval(function () {
                    if(_this.memoryChart){
                        let option = _this.memoryChart.getOption();
                        option.series[0].data = EchartData.getMemoryData();
                        _this.memoryChart.setOption(option);
                    }
                },2000);
            },
            //初始化硬盘图表
            initStorageEchart () {
                this.storageChart = echarts.init(document.getElementById('storage'));
                this.storageChart.setOption({
                    title : {
                        text: '硬盘使用率',
                        x:'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    color: ['rgb(55,162,218)', 'rgb(255,237,101)'],
                    series: [
                        {
                            name:'硬盘使用率',
                            type:'pie',
                            selectedMode: 'single',
                            radius: [0, '70%'],
                            //饼图内部是否环形和饼图大小
                            label: {
                                normal: {
                                    position: 'inner'
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: EchartData.getStorageData()
                        }
                    ]
                });

                //开启图表定时器
                clearInterval(this.storageIntval);
                this.setIntervalStorage();
            },
            //定时刷新硬盘数据
            setIntervalStorage () {
                let _this = this;
                this.storageIntval = setInterval(function () {
                    if(_this.storageChart){
                        let option = _this.storageChart.getOption();
                        option.series[0].data = EchartData.getStorageData();
                        _this.storageChart.setOption(option);
                    }
                },2000);
            },
            //初始化用户使用情况图表
            initUseEchart () {
                let dataAxis = EchartData.getUseData().useList;
                let data = EchartData.getUseData().data;
                this.useChart = echarts.init(document.getElementById('use'));
                this.useChart.setOption({
                    // title: {
                    //     text: '使用情况',
                    //     x: 'center'
                    // },
                    xAxis: {
                        data: dataAxis,
                        axisLabel: {
                            inside: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        z: 10
                    },
                    yAxis: {
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#999'
                            }
                        }
                    },
                    dataZoom: [
                        {
                            type: 'inside'
                        }
                    ],
                    series: [
                        { // For shadow
                            type: 'bar',
                            itemStyle: {
                                normal: {color: 'rgba(0,0,0,0.05)'}
                            },
                            barGap:'-100%',
                            barCategoryGap:'40%',
                            // data: dataShadow,
                            animation: false
                        },
                        {
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#83bff6'},
                                            {offset: 0.5, color: '#188df0'},
                                            {offset: 1, color: '#188df0'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#2378f7'},
                                            {offset: 0.7, color: '#2378f7'},
                                            {offset: 1, color: '#83bff6'}
                                        ]
                                    )
                                }
                            },
                            data: data
                        }
                    ]
                });

                //开启图表定时器
                clearInterval(this.useIntval);
                this.setIntervalUse();
            },
            //定时刷新用户使用情况数据
            setIntervalUse () {
                let _this = this;
                this.useIntval = setInterval(function () {
                    if(_this.useChart){
                        let option = _this.useChart.getOption();
                        option.xAxis.data = EchartData.getUseData().useList;
                        option.series[1].data = EchartData.getUseData().data;
                        _this.useChart.setOption(option);
                    }
                },5000);
            },
            //初始化网络流量图表
            initNetworkEchart () {
                this.networkChart = echarts.init(document.getElementById('network'));
                this.networkChart.setOption({
                    // title: {
                    //     text: '网络流量',
                    //     x: 'center'
                    // },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    color: ['rgb(55,162,218)', 'rgb(255,237,101)'],
                    legend: {
                        data:['上行速度', '下行速度']
                    },
                    toolbox: {
                        feature: {
                            // saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '3%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['20190326','20190326','20190326','20190326','20190326','20190326','20190326']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'上行速度',
                            type:'line',
                            stack: '总量',
                            areaStyle: {},
                            data: EchartData.getNetworkData().upData
                        },
                        {
                            name:'下行速度',
                            type:'line',
                            stack: '总量',
                            areaStyle: {},
                            data: EchartData.getNetworkData().downData
                        }
                    ]
                });

                //开启图表定时器
                clearInterval(this.networkIntval);
                this.setIntervalNetwork();
            },
            //定时刷新网络流量数据
            setIntervalNetwork () {
                let _this = this;
                this.networkIntval = setInterval(function () {
                    if(_this.networkChart){
                        let option = _this.networkChart.getOption();
                        option.series[0].data = EchartData.getNetworkData().upData;
                        option.series[1].data = EchartData.getNetworkData().downData;
                        _this.networkChart.setOption(option);
                    }
                },3000);
            },
        },
        computed: {

        }
    }
</script>