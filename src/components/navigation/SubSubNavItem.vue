<!-- 三级标题 -->
<template>
    <div class="sub-sub-nav-item" @click="activate" :class="{ activated3: isActivated }">
        {{ subSubItem.title }}
    </div>
</template>
<style lang="less" scoped>
.sub-sub-nav-item {
    cursor: pointer;
    margin: 7px 0;
    padding: 7px 0;
}

.activated3 {
    background-color: #a3beff;
}
</style>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['activatedTitle']),
        isActivated() {
            return this.activatedTitle === this.$props.subSubItem.title
        }
    },
    methods: {
        ...mapMutations(['setActivatedTitle']),
        activate() {
            this.setActivatedTitle(this.$props.subSubItem.title)
        },

    },
    components: {

    },
    watch: {

    },
    props: {
        subSubItem: Object,
    },
}
</script>