<template>
    <div class="study-detail">
        <Aside></Aside>
        <Article></Article>
        <!-- <LearningProgress :totalLearningTime="totalLearningTime" :todayTotalTime="todayTotalTime"></LearningProgress> -->
    </div>
</template>
<style lang='less' scoped>
.study-detail {
    display: flex;
    width: 1200px;
    margin: 200px auto;
}
</style>
<script>
import Aside from '@/components/layout/Aside.vue'
import Article from '@/components/layout/Article.vue'
import LearningProgress from '@/components/common/LearningProgress.vue'
import { mapState, mapMutations } from 'vuex'
import { supabase } from '@/lib/supabaseClient'

export default {
    data() {
        return {
            classLearningDataArray: [],
            totalLearningTime: 0,
            todayTotalTime: 0,
            alredyLearnedCount: 0,
            progressPercentage: 0,
            enterTime: 0,
            exitTime: 0,
        }
    },
    computed: {
        ...mapState(['activatedTitle']),
        className() {
            return this.$route.query.className
        }
    },
    methods: {
        ...mapMutations(['setActivatedTitle']),
        handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.alredyLearnedCount += 1;
                }
            });
        }
    },
    components: {
        Aside,
        Article,
        LearningProgress,
    },
    watch: {

    },
    props: {

    },
    async created() {
        const { data: { user: { user_metadata: { totalLearningTime, classLearningData } } } } = await supabase.auth.getUser()
        this.totalLearningTime = totalLearningTime
        this.classLearningDataArray = JSON.parse(classLearningData)
        let findResult = this.classLearningDataArray.find((item) => { return item.className === this.$route.query.className })
        if (!findResult) {
            this.classLearningDataArray.push({
                className: this.$route.query.className,
                todayTotalTime: 0,
                progress: 0,
            })
            findResult = this.classLearningDataArray.find((item) => { return item.className === this.$route.query.className })
        }
        const { time, progress } = findResult
        this.todayTotalTime = time
        this.progressPercentage = progress
    },
    // mounted() {
    //     this.enterTime = new Date()
    //     // 以下为观察
    //     const observer = new IntersectionObserver(this.handleIntersection, {
    //         threshold: 1.0 // 元素完全进入视口时触发
    //     });
    //     const target = document.getElementById('end');
    //     if (target) {
    //         observer.observe(target);
    //     }
    // },
    async beforeDestroy() {
        this.exitTime = new Date()
        this.todayTotalTime = this.exitTime - this.enterTime
        this.totalLearningTime += this.todayTotalTime
        let findResult = this.classLearningDataArray.find((item) => { return item.className === this.$route.query.className })
        findResult.time = this.todayTotalTime
        findResult.progress = this.progressPercentage
        const { error } = await supabase.auth.updateUser({
            data: {
                totalLearningTime: this.totalLearningTime,
                classLearningData: JSON.stringfy(this.classLearningDataArray)
            }
        })
        if (error) {
            alert(error.message)
        }
        this.setActivatedTitle('')
    },
}
</script>