<template>
    <nav class="bar bar-tab">
        <router-link tag="li" class="tab-item external" to='/movie'>
            <span class="icon icon-computer"></span>
            <span class="tab-label">电影</span>
        </router-link>
        <router-link tag="li" class="tab-item external" to="/cinema">
            <span class="icon icon-home"></span>
            <span class="tab-label">影院</span>
        </router-link>
        <router-link tag="li" class="tab-item external" to="/mine">
            <span class="icon icon-me"></span>
            <span class="tab-label">我的</span>
        </router-link>
    </nav>
</template>

<script>
export default {
    name:'TabBar'
}
</script>

<style scoped>
.router-link-active {
    color:#0894ec;
}
</style>
