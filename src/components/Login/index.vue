<template>
    <div class="content">
        <div class="list-block">
            <ul>
                <li>
                    <div class="item-content">
                        <div class="item-media"><i class="icon icon-form-name"></i></div>
                        <div class="item-inner">
                            <div class="item-title label">账号</div>
                            <div class="item-input">
                                <input type="text" placeholder="Your name">
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="item-content">
                    <div class="item-media"><i class="icon icon-form-email"></i></div>
                    <div class="item-inner">
                        <div class="item-title label">密码</div>
                        <div class="item-input">
                        <input type="email" placeholder="E-mail">
                        </div>
                    </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="content-block">
            <p><a href="#" class="button button-big button-round">登陆</a></p>
            <p class="button-register">
                <span>立即注册</span>
                <span>找回密码</span>
            </p>
        </div>
    </div>
</template>
<style scoped>
.button-register {
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    color:red;
    font-size:14px;
}
</style>
