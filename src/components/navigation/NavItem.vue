<!-- 一级标题 -->
<template>
    <div class="nav-item">
        <div class="item-title" @click="toggle">
            {{ item.title }} <i class="el-icon-arrow-down" :class="{ activated: expanded }"></i>
        </div>
        <div class="sub-nav-items-container" v-if="expanded">
            <SubNavItem v-for="subItem in item.subItems" :key="subItem.id" :subItem="subItem"></SubNavItem>
        </div>
    </div>
</template>
<style lang="less" scoped>
.nav-item {
    cursor: pointer;
    text-align: left;

    .item-title {
        font-size: 28px;
        margin: 14px 0;

        i {
            transition: transform 0.5s ease;
        }
    }
}

.activated {
    transform: rotate(180deg);
}
</style>
<script>
import SubNavItem from '@/components/navigation/SubNavItem.vue'

export default {
    data() {
        return {
            expanded: false,
        }
    },
    computed: {

    },
    methods: {
        toggle() {
            this.expanded = !this.expanded
        }
    },
    components: {
        SubNavItem,
    },
    watch: {

    },
    props: {
        item: Object,
    },
}
</script>