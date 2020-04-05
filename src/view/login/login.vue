<template>
    <div class="login">
        <div class="left">
            <div class="title">
                <img src="@/assets/img/login_logo.png" alt="">
                <span class="titleName">黑马绵绵</span>
                <span class="titleLine"> | </span>
                <span class="titleName2">用户登录</span>
            </div>
            
        </div>
        <div class="right">
            <img src="@/assets/img/login_banner_ele.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style lang="less">
    @import url("~@/assets/css/style.css");

    .login {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        background: linear-gradient(225deg,
                rgba(20, 147, 250, 1),
                rgba(1, 198, 250, 1));

        .left {
            width: 478px;
            height: 550px;
            background: rgba(245, 245, 245, 1);
            padding: 44px;
            .titleName {
                margin-right:16px;
                margin-left:16px;
                font-size: 24px;
                font-family: SourceHanSansCN;
                font-weight: 400;
                color: rgba(12, 12, 12, 1);
            };
            .titleLine {
                font-size: 22px;
                color:rgba(199,199,199,1);
            }
            .titleName2 {
                margin-left:16px;
                font-size: 22px;
                font-weight: 400;
                color: rgba(12, 12, 12, 1);
            }
        }
    }
</style>