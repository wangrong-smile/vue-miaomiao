<template>
    
    <!-- 切换路由的时候，每次切换的时候都会重新渲染页面，这样会影响性能，利用keep-alive 可以做一个缓存的操作  -->
    <keep-alive>
        <router-view/>
    </keep-alive>
</template>

