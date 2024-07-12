<template>
    <div id="course-display">
        <MultiLevelMenu v-if="categories" :categories="categories" @select-sub-category="filterCourses">
        </MultiLevelMenu>
        <div class="course-container">
            <CourseCard v-for="(course, index) in filteredCourses" :key="index" :courseName="course"></CourseCard>
        </div>
    </div>
</template>
<style lang='less' scoped>
#course-display {
    margin: 50px 0;
}

.course-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
<script>
import { supabase } from '@/lib/supabaseClient'
import CourseCard from "@/components/common/CourseCard.vue"
import MultiLevelMenu from "@/components/navigation/MultiLevelMenu.vue"
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            categories: null,
            filteredCourses: [],
        }
    },
    methods: {
        async getClasses() {
            let { data } = await supabase
                .from('Classes')
                .select()
            this.classes = data[0].class["CS-classes"]
            return this.classes // 注意async函数返回的是Promise对象
        },
        async getAllCourses() {
            let courses = [];
            this.categories.forEach(category => {
                category.SubCategories.forEach(subCategory => {
                    courses = courses.concat(Object.keys(subCategory.ClassName))
                })
            })
            return courses
        },
        filterCourses(subCategory) {
            this.filteredCourses = Object.keys(subCategory.ClassName)
            console.log(this.filteredCourses);
        },
        ...mapActions(['fetchClassList'])
    },
    components: {
        CourseCard,
        MultiLevelMenu,
    },
    async mounted() {
        this.categories = await this.getClasses()
        this.filteredCourses = await this.getAllCourses()
    },
    created(){
        this.fetchClassList()
    }

}
</script>