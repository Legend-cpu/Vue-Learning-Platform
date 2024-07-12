<template>
    <div id="nav-bar">
        <div class="nav-link">
            <i class="el-icon-s-home"></i><router-link to="/">首页</router-link>
        </div>
        <div class="nav-link" v-if="!isLoggedIn">
            <i class="el-icon-position"></i><router-link to="/login">登录/注册</router-link>
        </div>
        <el-dropdown class="nav-link" v-if="isLoggedIn" @command="handleCommand">
            <span class="el-dropdown-link">
                <i class="el-icon-user"></i><router-link to="">个人中心</router-link>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="0">个人中心</el-dropdown-item>
                <el-dropdown-item command="1">我的课程</el-dropdown-item>
                <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<style lang="less" scoped>
#nav-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 100px;
}

.nav-link {
    margin: 0 30px;
}

i {
    margin: 8px;
}
</style>
<script>
import { mapActions, mapState, mapMutations } from 'vuex';


export default {
    name: 'NavBar',
    methods: {
        ...mapActions(['logout']), 
        ...mapMutations(['setLoggedIn']),
        async handleCommand(command) {
            if (command === "0" || command === "1") {
                this.$router.push(`/user?tab=${command}`)
                await this.$nextTick()
                document.getElementById(`tab-${this.$route.query.tab}`).click()
            } else if (command === "logout") {
                await this.logout();
            }
        }
    },
    computed:{
        ...mapState(['isLoggedIn'])
    },
}
</script>