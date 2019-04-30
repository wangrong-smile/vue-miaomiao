<template>
    <div id="main">
        <Header title="喵喵电影"/>
        <div class="content">
            <!-- <div class="buttons-tab">
                <router-link class="tab-link button" to="/movie/city">大连
                    <span class="icon icon-caret"></span>
                </router-link>
                <router-link class="tab-link button" to="/movie/nowPlaying">正在热映</router-link>
                <router-link class="tab-link button" to="/movie/comingSoon">即将上映</router-link>
                <router-link class="tab-link button" to="/movie/search">
                    <span class="icon icon-search"></span>
                </router-link>
            </div> -->
            <div class="buttons-tab">
                <a href="#tab1" class="tab-link active button">大连
                    <span class="icon icon-caret"></span>
                </a>
                <a href="#tab2" class="tab-link button">正在热映</a>
                <a href="#tab3" class="tab-link button">即将上映</a>
                <a href="#tab4" class="tab-link button">
                    <span class="icon icon-search"></span>
                </a>
            </div>
             <div class="content-block">
                <div class="tabs">
                <div id="tab1" class="tab active">
                    <div class="content-block">
                        <City />
                    </div>
                </div>
                <div id="tab2" class="tab">
                    <div class="content-block">
                        <Now-playing />
                    </div>
                </div>
                <div id="tab3" class="tab">
                    <div class="content-block">
                        <Coming-soon />
                    </div>
                </div>
                <div id="tab4" class="tab">
                    <div class="content-block">
                        <Search />
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
import City from '@/components/City'
import ComingSoon from '@/components/ComingSoon'
import NowPlaying from '@/components/NowPlaying'
import Search from '@/components/Search'

export default {
    name:'movie',
    components:{Header,TabBar,City,ComingSoon,NowPlaying,Search}
}
</script>

<style>

</style>
