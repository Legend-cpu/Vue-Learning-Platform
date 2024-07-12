<template>
    <div id="logo">
        <div class="upper-part">EZ</div>
        <div class="lower-part">在线学习平台</div>
    </div>
</template>
<style lang="less" scoped>
#logo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
    cursor: pointer;
}
.upper-part {
    font-size: var(--extra-large-font-size);
}

.lower-part {
    font-size: var(--small-font-size);
}

.upper-part, .lower-part{
    line-height: 1.5;
}
</style>
<script>
export default {
    name: 'Logo'
}
</script>