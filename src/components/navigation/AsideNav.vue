<template>
    <div class="aside-nav">
            <NavItem v-for="item in navItems" :key="item.id" :item="item"></NavItem>
    </div>
</template>
<style lang='less' scoped>
    .aside-nav {
        padding: 0 40px;
    }
</style>
<script>
import NavItem from '@/components/navigation/NavItem.vue'


export default {
    data() {
        return {
            navItems: [
                {
                    id: 1,
                    title: '一级标题1',
                    subItems: [
                        {
                            id: 11,
                            title: '二级标题1-1',
                            subSubItems: [
                                { id: 111, title: '三级标题1-1-1' },
                                { id: 112, title: '三级标题1-1-2' },
                                { id: 113, title: '三级标题1-1-3' },
                            ]
                        },
                        {
                            id: 12,
                            title: '二级标题1-2',
                            subSubItems: [
                                { id: 121, title: '三级标题1-2-1' },
                                { id: 122, title: '三级标题1-2-2' },
                                { id: 123, title: '三级标题1-2-3' },
                            ]
                        },
                        {
                            id: 13,
                            title: '二级标题1-3',
                            subSubItems: [
                                { id: 131, title: '三级标题1-3-1' },
                                { id: 132, title: '三级标题1-3-2' },
                                { id: 133, title: '三级标题1-3-3' },
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    title: '一级标题2',
                    subItems: [
                        {
                            id: 21,
                            title: '二级标题2-1',
                            subSubItems: [
                                { id: 211, title: '三级标题2-1-1' },
                                { id: 212, title: '三级标题2-1-2' },
                                { id: 213, title: '三级标题2-1-3' },
                            ]
                        },
                        {
                            id: 22,
                            title: '二级标题2-2',
                            subSubItems: [
                                { id: 221, title: '三级标题2-2-1' },
                                { id: 222, title: '三级标题2-2-2' },
                                { id: 223, title: '三级标题2-2-3' },
                            ]
                        },
                        {
                            id: 23,
                            title: '二级标题2-3',
                            subSubItems: [
                                { id: 231, title: '三级标题2-3-1' },
                                { id: 232, title: '三级标题2-3-2' },
                                { id: 233, title: '三级标题2-3-3' },
                            ]
                        }
                    ]
                }
            ]
        }
    },
    components: {
        NavItem,
    }
}
</script>