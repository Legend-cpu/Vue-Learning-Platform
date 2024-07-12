<template>
    <main>
        <Carousel></Carousel>
        <CourseDisplay></CourseDisplay>
    </main>
</template>
<style lang="less" scoped>
main {
    width: 1200px;
    margin: 200px auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
}
</style>
<script>
import Carousel from '@/components/common/CarouselComponent.vue'
import CourseDisplay from '@/components/feature/CourseDisplay.vue'

export default {
    name: 'Main',
    components: {
        Carousel,
        CourseDisplay,
    },
    methods: {
        
    },
}
</script>