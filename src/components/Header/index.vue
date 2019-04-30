<template>
    <header class="bar bar-nav">
        <h1 class="title">{{ title }}</h1>
    </header>
</template>

<script>
export default {
    name :'Header',
    props : {
        title : {
            default : '喵喵影院'
        }
    }
}
</script>

<style scoped>
.title{
    background:red;
    color:#fff;
}
</style>
