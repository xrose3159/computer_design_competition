
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>全球经济形势分析</title>
    <script src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/echarts/map/js/world.js"></script>
    <style>
        #mainMap, #exportBar, #importBar, #gdpLine, #sectorPie {
            width: 49%;
            height: 49%;
            display: inline-block;
        }
        #exportBar, #importBar {
            float: left;
        }
        #gdpLine, #sectorPie {
            float: right;
        }
    </style>
</head>
<body>
    <div id="mainMap"></div>
    <div id="exportBar"></div>
    <div id="importBar"></div>
    <div id="gdpLine"></div>
    <div id="sectorPie"></div>

    <script src="charts.js"></script> <!-- 放置 JavaScript 代码 -->
</body>
</html>


// 基础设置
function createChart(domId) {
    var chart = echarts.init(document.getElementById(domId));
    chart.showLoading();
    return chart;
}

var mainMap = createChart('mainMap');
var exportBar = createChart('exportBar');
var importBar = createChart('importBar');
var gdpLine = createChart('gdpLine');
var sectorPie = createChart('sectorPie');

// 主地图配置
var mapOption = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    series: [{
        type: 'map',
        map: 'world',
        roam: true,
        emphasis: {
            label: {
                show: false
            }
        }
    }]
};
mainMap.setOption(mapOption);

// 更新图表数据的函数
function updateCharts(country) {
    // 这里应该使用 AJAX 获取数据并更新图表，此处以假数据为例
    exportBar.setOption({
        title: { text: country + ' 出口贸易' },
        xAxis: { type: 'category', data: ['USA', 'EU', 'JP'] },
        yAxis: { type: 'value' },
        series: [{ type: 'bar', data: [120, 200, 150] }]
    });

    importBar.setOption({
        title: { text: country + ' 进口贸易' },
        xAxis: { type: 'category', data: ['USA', 'EU', 'JP'] },
        yAxis: { type: 'value' },
        series: [{ type: 'bar', data: [80, 100, 120] }]
    });

    gdpLine.setOption({
        title: { text: country + ' GDP 变化' },
        xAxis: { type: 'category', data: ['2015', '2016', '2017', '2018', '2019'] },
        yAxis: { type: 'value' },
        series: [{ type: 'line', data: [400, 450, 500, 530, 550] }]
    });

    sectorPie.setOption({
        title: { text: country + ' 各产业GDP占比' },
        series: [{ type: 'pie', data: [{ value: 335, name: '行业A' }, { value: 310, name: '行业B' }, { value: 234, name: '行业C' }] }]
    });
}

// 点击地图国家时更新图表
mainMap.on('click', function (params) {
    updateCharts(params.name);
});

// 初始化时隐藏加载动画
mainMap.hideLoading();
exportBar.hideLoading();
importBar.hideLoading();
gdpLine.hideLoading();
sectorPie.hideLoading();