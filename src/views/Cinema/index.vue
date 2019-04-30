<template>
    <div id="main">
        <Header title='喵喵影院'/>
        <div class="content">
            <div class="buttons-tab">
                <a href="#tab1" class="tab-link active button">全称
                    <span class="icon icon-caret"></span>
                </a>
                <a href="#tab2" class="tab-link button">品牌
                    <span class="icon icon-caret"></span>
                </a>
                <a href="#tab3" class="tab-link button">特色
                    <span class="icon icon-caret"></span>
                </a>
            </div>
            <div class="content-block">
                <div class="tabs">
                    <div id="tab1" class="tab active">
                        <div class="content-block">
                        <p>全称信息</p>
                        </div>
                    </div>
                    <div id="tab2" class="tab">
                        <div class="content-block">
                        <p>品牌信息</p>
                        </div>
                    </div>
                    <div id="tab3" class="tab">
                        <div class="content-block">
                        <p>特色信息</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        <TabBar />
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
    name:'Cinema',
    components:{Header,TabBar}
}
</script>

<style>

</style>
