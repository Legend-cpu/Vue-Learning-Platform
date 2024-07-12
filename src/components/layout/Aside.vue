<template>
    <aside class="aside">
        <div class="aside-title">{{ title }}</div>
        <AsideNav></AsideNav>
    </aside>
</template>
<style lang='less' scoped>
.aside {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding: 20px;
    height: 500px;
    overflow-y: scroll;
    position: sticky;
    top: 200px;

    .aside-title {
        font-size: 36px;
        color: #a3beff;
        padding: 20px 60px;
    }
}
</style>
<script>
import AsideNav from '@/components/navigation/AsideNav.vue'

export default {
    components: {
        AsideNav
    },
    data() {
        return {

        }
    },
    computed: {
        title() {
            return this.$route.query.className
        }
    }
}
</script>