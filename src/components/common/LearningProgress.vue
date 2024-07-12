<template>
    <div class="learning-progress">
        <el-button type="text" @click="dialogVisible = true">查看学习时长</el-button>

        <el-dialog title="学习时长" :visible.sync="dialogVisible" width="30%">
            <div id="chart">

            </div>
            <p>总学习时长：{{ totalLearningTime }}分钟</p>
        </el-dialog>
    </div>
</template>
<style lang="less" scoped>
#chart {
    width: 300px;
    height: 300px;
}
</style>
<script>

export default {
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {

    },
    components: {

    },
    watch: {

    },
    props: {
        totalLearningTime: Number,
        todayTotalTime: Number,
    },
    mounted() {
        // 初始化图表，设置配置项
        let myChart = echarts.init(document.getElementById('chart'));
        myChart.setOption({
            title: {
                text: (this.$props.todayTotalTime/60000).toString() + '/ 25 min',
                left: 'center',
                top: 'center'
            },
            series: [
                {
                    type: 'pie',
                    data: [
                        {
                            value: this.$props.todayTotalTime/60000,
                            name: '今日已学习时长'
                        },
                        {
                            value: 25 - this.$props.todayTotalTime/60000,
                            name: '距目标差距时长'
                        },
                    ],
                    radius: ['40%', '70%']
                }
            ]
        });
    }
}
</script>