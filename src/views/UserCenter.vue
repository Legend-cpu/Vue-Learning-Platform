<template>
    <div class="user-center">
        <div class="card">
            <el-card>
                <div class="left">
                    <el-avatar>{{ userName[0] }}</el-avatar>
                </div>
                <div class="right">
                    <el-tag> {{ userName }}</el-tag>
                    <el-tag size="mini" type="success"> 上次登录于：{{ lastSignInAt }} </el-tag>
                </div>
            </el-card>
        </div>
        <div class="info-area">
            <el-tabs :tab-position="tabPosition" type="border-card">
                <el-tab-pane label="个人信息">
                    <div class="info">
                        <ul>
                            <li>注册时间：<span>{{ createdAt }}</span></li>
                            <li>邮箱地址：<span>{{ email }}</span></li>
                            <li>拥有课程数量：<span>{{ classNum }}</span></li>
                        </ul>
                    </div>
                    <el-button type="primary" @click="handleLogout">退出登录</el-button>
                </el-tab-pane>
                <el-tab-pane label="我的课程">
                    <CourseCard v-for="(course, index) in localClassList" :key="index" :courseName="course"></CourseCard>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<style lang='less' scoped>
.user-center {
    margin: 200px auto;
    width: 1000px;

    .card {
        margin-bottom: 50px;

        .right span {
            display: block;
            margin-bottom: 8px;
        }

        .right span:nth-child(1) {
            font-size: 16px;
        }
    }

    .info-area {
        .el-tabs {
            height: 500px;
        }

        .info {
            ul>li {
                list-style-type: none;
                font-size: 16px;
                margin: 16px;
                text-align: left;

                span {
                    color: #a3beff;
                }
            }
        }

        .info+.el-button {
            position: absolute;
            right: 24px;
            bottom: 24px;
        }
    }
}

::v-deep .el-card__body {
    display: flex;
    height: 100px;

    .left,
    .right {
        align-self: center;
        margin-left: 24px;
    }

    .right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
}

::v-deep .el-tabs__content {
    height: 100%;
    padding: 0;
    overflow-y: scroll;

    #pane-1 {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
}
</style>
<script>
import { supabase } from '@/lib/supabaseClient';
import { mapActions, mapState } from 'vuex';
import CourseCard from '@/components/common/CourseCard.vue';

export default {
    data() {
        return {
            userName: '',
            tabPosition: 'left',
            createdAt: '',
            lastSignInAt: '',
            email: '',
            classList: '[]',
            classNum: '',
        }
    },
    methods: {
        ...mapActions(['logout','fetchClassList']),
        async handleLogout() {
            await this.logout();
        },
    },
    components: {
        CourseCard,
    },
    computed:{
        ...mapState(['localClassList'])
    },
    async mounted() {
        const { data: { user } } = await supabase.auth.getUser()
        const { user_metadata: { userName }, created_at, last_sign_in_at, email } = user;

        this.userName = userName;
        this.createdAt = new Date(created_at).toLocaleString();
        this.lastSignInAt = new Date(last_sign_in_at).toLocaleString();
        this.email = email;
        this.classNum = this.localClassList.length;

    },
    created(){
        this.fetchClassList()
    }
}
</script>