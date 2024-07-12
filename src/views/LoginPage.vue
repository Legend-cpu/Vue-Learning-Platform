<template>
    <div class="login">
        <el-tabs type="border-card">
            <el-tab-pane label="登录/注册">
                <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item label="邮箱">
                        <el-input v-model="form.email" placeholder="请输入邮箱地址"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
                    </el-form-item>
                    <el-form-item label="用户名">
                        <el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" round @click="login">登录</el-button>
                        <el-button round @click="signUp">注册</el-button>
                        <el-tag>新用户注册后会自动登录</el-tag>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </div>

</template>
<style lang='less' scoped>
.login {
    width: 600px;
    margin: 202px auto;
}

.el-tag {
    margin: 0 20px;
}
</style>
<script>
import { supabase } from '@/lib/supabaseClient';
import { mapActions, mapMutations } from 'vuex';

export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
                userName: ''
            }
        }
    },
    methods: {
        ...mapActions(['logout']),
        ...mapMutations(['setLoggedIn']),
        async signUp() {
            try {
                // 调用接口进行注册
                const { data, error } = await supabase.auth.signUp({
                    email: this.form.email,
                    password: this.form.password,
                    options: {
                        data: {
                            userName: this.form.userName,
                            classList: '[]',
                            totalLearningTime: 0,
                            // classLearningData格式: [{className: 'xxxxx', time: 7, progress: 0.75}], time是指todayTotalTime, 时间单位是分钟(向上取整)
                            classLearningData: '[]'
                        }
                    }
                })
                // 登录结果显示
                if (error) {
                    alert('注册失败：' + error.message);
                } else {
                    console.log('注册成功：', data)
                    this.login()
                }
            } catch (error) {
                alert('注册失败：' + error.message)
            }
        },
        async login() {
            try {
                // 调用接口进行登录
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: this.form.email,
                    password: this.form.password,
                })

                // 注册结果
                if (error) {
                    alert('登录失败：' + error.message);
                } else {
                    console.log('登录成功：', data)
                    this.setLoggedIn(true)
                    // 补充：登录后跳转首页
                    this.$router.push('/');
                }
            } catch (error) {
                alert('登录失败：' + error.message)
            }

        },

    }
}
</script>