<template>
    <div id="multi-level-menu">
        <div>全部分类：</div>
        <div v-for="(category, index) in categories" :key="index">
            <div @click="toggleSubCategory(index)" class="large-category">
                {{ category.LargeCategory }}
            </div>
            <transition name="fade">
                <div v-if="activeCategory === index" class="sub-categories">
                    <div @click="selectSubCategory(subCategory)" v-for="(subCategory, subIndex) in category.SubCategories" :key="subIndex" class="sub-category">
                        {{ subCategory.SubCategoryName }}
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        categories: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            activeCategory: null,
            selectedCategory: null,
        };
    },
    methods: {
        toggleSubCategory(index) {
            if (this.activeCategory === index) {
                this.activeCategory = null; // Toggle off if the same category is clicked again
            } else {
                this.activeCategory = index;
            }
        },
        selectSubCategory(subCategory){
            this.$emit('select-sub-category', subCategory)
        }

    }
};
</script>

<style lang="less" scoped>
#multi-level-menu {
    // width: 1000px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
}

#multi-level-menu>div:nth-child(1) {
    display: flex;
    align-items: center;
    height: 48px;
    line-height: 30px;
}

.large-category {
    width: 100px;
    height: 30px;
    line-height: 30px;
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
}

.sub-categories {
    cursor: pointer;
}

.sub-category {
    padding: 5px 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>