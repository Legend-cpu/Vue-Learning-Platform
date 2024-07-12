<template>
    <div id="carousel">
        <el-carousel trigger="click" height="300px" type="card">
            <el-carousel-item v-for="item in 4" :key="item">
                <h1>{{ techPromotions[item - 1].name }}</h1>
                <h3>{{ techPromotions[item - 1].sloganCN }}</h3>
                <h3>{{ techPromotions[item - 1].slogan }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<style lang="less" scoped>
.el-carousel__item {
    background-color: #a3bfff;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        margin: 20px 0;
    }

    h3 {
        margin: 8px 0;
    }
}
</style>
<script>
export default {
    data() {
        return {
            techPromotions: [
                {
                    name: "人工智能 (Artificial Intelligence)",
                    slogan: "Unlock the future with AI: Revolutionize your business with intelligent automation.",
                    sloganCN: "解锁未来的钥匙：用智能自动化革新您的业务。"
                },
                {
                    name: "区块链 (Blockchain)",
                    slogan: "Secure and transparent transactions: Embrace the power of blockchain technology.",
                    sloganCN: "安全透明的交易：拥抱区块链技术的力量。"
                },
                {
                    name: "云计算 (Cloud Computing)",
                    slogan: "Scale effortlessly and innovate faster: Harness the limitless potential of cloud computing.",
                    sloganCN: "轻松扩展，快速创新：利用云计算的无限潜力。"
                },
                {
                    name: "物联网 (Internet of Things)",
                    slogan: "Connect the world around you: Transform your operations with IoT solutions.",
                    sloganCN: "连接你周围的世界：用物联网解决方案改变您的运营。"
                }
            ]
        }
    }
}
</script>