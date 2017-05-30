<template>
  <div id="main-page">
    <Head-view></Head-view>

    <div class="row-swiper">
      <div class='swiper-pagination1'></div>
      <swiper :options="swiperOptionb" ref="mySwiper">
        <swiper-slide>
            <Content-view></Content-view>
        </swiper-slide>
        <swiper-slide>
          <Musicmenu/>
        </swiper-slide>
        <swiper-slide>
          <Up/>
        </swiper-slide>
      </swiper>
    </div>
    <footer-view></footer-view>

  </div>
</template>

<script>
import Head from '../components/head'
import Content from '../components/content'
import Footer from '../components/footer'
import Musicmenu from '../views/musicmenu'
import Up from '../views/up'

export default {
  name: 'app',
  data(){
    return {
      swiperOptionb:{
        touchRatio:0.7,
        loop:false,
        pagination:'.swiper-pagination1',
        paginationClickable:true
      }
    }
  },
  components:{
    'Head-view':Head,
    'footer-view':Footer,
    'Content-view':Content,
    Musicmenu,
    Up
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #fbfcfd;
  overflow: hidden;
}
#app, #main-page, .row-swiper, .swiper-container{
  height: 100%;
}
.row-swiper {
  position: relative;
}
.swiper-pagination1{
  position: absolute;
  height: 3.95rem;
  z-index: 99999;
  width: 31.1rem;
  left: 0;
  top: 4.3rem;
  padding: 0 0.45rem;
  display: flex;
  justify-content: space-between;
  background: #f8f8f9;
}
.swiper-pagination1 .swiper-pagination-bullet{
  height: 100%;
  width: 7rem;
  background: #5fc2db;
  border-radius: 0;
  text-align: center;
  background: none;
  position: relative;
}
.swiper-pagination1 .swiper-pagination-bullet::after{
  font: 1.4rem/3.95rem '微软雅黑';
  color: #333;
}
.swiper-pagination1 .swiper-pagination-bullet-active::before{
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 0.2rem;
  background: #5fc2db;
}
.swiper-pagination1 .swiper-pagination-bullet:nth-child(1):after{
  content: "个性推荐"
}
.swiper-pagination1 .swiper-pagination-bullet:nth-child(2):after{
  content: "歌单";
}
.swiper-pagination1 .swiper-pagination-bullet:nth-child(3):after{
  content: "主播电台"
}
.swiper-pagination1 .swiper-pagination-bullet:nth-child(4):after{
  content: "排行榜"
}
.swiper-pagination1 .swiper-pagination-bullet-active::after{
  color: #5fc2db;
}
</style>
