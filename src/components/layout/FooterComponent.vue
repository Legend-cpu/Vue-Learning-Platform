<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section about">
                    <h2>关于我们</h2>
                    <p>我们希望创建令人惊叹的Web应用程序.</p>
                </div>
                <div class="footer-section social">
                    <h2>关注我们</h2>
                    <div class="social-icons">
                        <a href="#">facebook</a>
                        <a href="#">twitter</a>
                        <a href="#">instagram</a>
                        <a href="#">sina</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; 2024 EZ Class | All Rights Reserved
            </div>
        </div>
    </footer>
</template>
<style lang="less" scoped>
.footer {
    background: #333;
    color: #fff;
    padding: 20px 0;
    height: 230px;
}

.footer .container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-content {
    // display: flex;
    // justify-content: space-between;
    width: 100%;
    max-width: 1200px;
}

.footer-section {
    flex: 1;
    padding: 20px;
}

.footer-section h2 {
    margin-bottom: 10px;
}

.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li {
    margin-bottom: 5px;
}

.footer-section ul li a {
    color: #fff;
    text-decoration: none;
}

.footer-section .social-icons a {
    margin: 0 10px;
    color: #fff;
    font-size: 1.2em;
}

.footer-bottom {
    text-align: center;
    margin-top: 20px;
}
</style>