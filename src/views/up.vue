<template lang="html">
  <div class="up">
    <header class="up-head">
      <div class="up-swiper">
        <div class="up-pagnination"></div>
        <swiper :options="swiperOptionb" ref="mySwiper">
          <swiper-slide>
            <div class="up-swiper-img">
              <img src="../assets/imgs/43.png" alt="">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="up-swiper-img">
              <img src="../assets/imgs/44.png" alt="">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="up-swiper-img">
              <img src="../assets/imgs/45.png" alt="">
            </div>
          </swiper-slide>
      </swiper>
      </div>
    </header>
    <div class="up-content">
      <header class="up-content-head">
        <h1 class="up-content-title">
          <span>每天听些好节目</span>
        </h1>
      </header>
      <ul class="up-list">
        <li>
          <div class="up-list-img">
            <img src="../assets/imgs/46.png" alt="">
          </div>
          <div class="up-list-text">
            <p class="up-text-floor1">
              不管你允不允许，我都要爱下去
            </p>
            <p class="up-text-floor2">
              那些歌儿
            </p>
          </div>
        </li>
        <li>
          <div class="up-list-img">
            <img src="../assets/imgs/47.png" alt="">
          </div>
          <div class="up-list-text">
            <p class="up-text-floor1">
              那些在不经意间被撒的狗粮
            </p>
            <p class="up-text-floor2">
              滚滚电台ORZ
            </p>
          </div>
        </li>
        <li>
          <div class="up-list-img">
            <img src="../assets/imgs/48.png" alt="">
          </div>
          <div class="up-list-text">
            <p class="up-text-floor1">
              血腥爱情故事（cover张惠妹）
            </p>
            <p class="up-text-floor2">
              来听兔兔的歌
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      swiperOptionb:{
        autoplay:3000,
        loop:true,
        touchRatio:0.7,
        loop:false,
        pagination:'.up-pagnination',
        paginationClickable:true,
        autoplayDisableOnInteraction:false,
      }
    }
  }
}
</script>

<style lang="css">
.up{
  margin-top: 8.25rem;
}
.up-swiper{
  position: relative;
}
.up-pagnination{
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: .8rem;
  left: 0;
  z-index: 10;
}
.up-pagnination .swiper-pagination-bullet{
  width: 0.6rem;
  height: 0.6rem;
  margin: 0 0.2rem;
}
.up-swiper-img{
  width: 100%;
  height: 12.4rem;
}
.up-swiper-img img{
  width: 100%;
  height: 100%;
}
.up-content{
  margin-top: 1rem;
}
.up-content-head{
  border-bottom: 1px solid #b9baba;
}
.up-content-title{
  font: 1.6rem/4.8rem '微软雅黑';
}
.up-list li{
  height: 7rem;
  border-bottom: 1px solid #b9baba;
  display: flex;
  justify-content: space-between;
}
.up-list-img{
  width: 7rem;
  height: 7rem;
}
.up-list-img img{
  width: 100%;
  height: 100%;
}
.up-list-text{
  width: 22.2rem;
  margin-left: 1rem;
}
.up-list-text p{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.up-text-floor1{
  font: 1.5rem/4.5rem '微软雅黑';
  color: #323233;
}
.up-text-floor2{
  font: 1.1rem/1.3rem '微软雅黑';
  color: #7d7d7f;
}
</style>
