<!-- 二级标题 -->
<template>
    <div class="sub-nav-item">
        <div class="sub-nav-title" @click="toggle">
            {{ subItem.title }} <i class="el-icon-arrow-down" :class="{ activated: expanded }"></i>
        </div>
        <div class="sub-sub-nav-items-container" v-if="expanded">
            <SubSubNavItem v-for="subSubItem in subItem.subSubItems" :key="subSubItem.id" :subSubItem="subSubItem">
            </SubSubNavItem>
        </div>
    </div>
</template>
<style lang="less" scoped>
.sub-nav-item {
    cursor: pointer;
    
    .sub-nav-title {
        font-size: 20px;
        margin: 10px 0;
        
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
import SubSubNavItem from '@/components/navigation/SubSubNavItem.vue'

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
        SubSubNavItem,
    },
    watch: {

    },
    props: {
        subItem: Object,
    },
}
</script>