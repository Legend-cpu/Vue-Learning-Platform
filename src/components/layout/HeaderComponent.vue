<template>
    <header>
        <Logo></Logo>
        <NavBar></NavBar>
    </header>
</template>
<style lang="less" scoped>
header {
    display: flex;
    justify-content: space-between;
    height: 100px;
    background-color: #a3beff;
    color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 999;
}
</style>
<script>
import NavBar from "@/components/navigation/NavBar.vue";
import Logo from "@/components/common/LogoComponent.vue";

export default {
    name: 'Header',
    components: {
        NavBar: NavBar,
        Logo: Logo
    }
}
</script>