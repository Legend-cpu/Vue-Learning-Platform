<template>
    <div class="course-card">
        <div :style="boxStyle" class="cover">
            <div class="course-name">{{ courseName }}</div>
        </div>
        <div class="title">
            <span>{{ courseName }}</span>
            <el-button icon="el-icon-plus" size="small" circle title="添加到“我的课程”" v-if="isLoggedIn & !isAdded"
                @click="addToList"></el-button>
            <el-button icon="el-icon-right" size="small" circle title="进入学习" v-if="isLoggedIn & isAdded" @click="goToLearn"></el-button>
        </div>

    </div>
</template>
<style lang='less' scoped>
.course-card {
    width: 20%;
    // height: 150px;
    margin: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    cursor: pointer;

    // .cover和.title的height相加等于.course-card的height
    .cover {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        color: white;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom: 1px solid #f0f0f0;
    }

    .title {
        height: 50px;
        position: relative;

        span,
        .el-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }

        span {
            margin-right: 20px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        .el-button:nth-child(2) {
            right: 8px
        }

        .el-button:nth-child(3) {
            right: 8px;
        }
    }
}
</style>
<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'CourseCard',
    data() {
        return {
        }
    },
    props: {
        courseName: {
            type: String,
            required: true
        }
    },
    methods: {
        ...mapActions(['updateRemoteList']),
        getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
        async addToList() {
            try {
                this.updateRemoteList([this.$props.courseName])
                alert('添加成功！')
            } catch (error) {
                alert(error)
            }
        },
        goToLearn(){
            this.$router.push(`/study?className=${this.$props.courseName}`)
        }
    },
    computed: {
        ...mapState(['isLoggedIn', 'localClassList']),
        boxStyle() {
            return {
                backgroundColor: this.getRandomColor()
            };
        },
        isAdded: {
            get: function () {
                return this.localClassList.includes(this.$props.courseName)
            },
        }
    },
    created(){
        // this.fetchClassList()
    }
}
</script>