<template lang="html">
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <img src="../../assets/imgs/1.png" alt="" class="sub-img">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/imgs/2.png" alt="" class="sub-img">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/imgs/3.png" alt="" class="sub-img">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/imgs/4.png" alt="" class="sub-img">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/imgs/5.png" alt="" class="sub-img">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/imgs/6.png" alt="" class="sub-img">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/imgs/7.png" alt="" class="sub-img">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/imgs/8.png" alt="" class="sub-img">
      </swiper-slide>
    </swiper>
    <div class='swiper-pagination'></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      swiperOption:{
        autoplay:3000,
        touchRatio:0.7,
        loop:true,
        watchSlidesProgress:true,
        watchSlidesVisibility:true,
        autoplayDisableOnInteraction:false,
        paginationClickable:true,
        pagination:'.swiper-pagination',
        hashnav:true
      }
    }
  },
  methods:{

  }
}
</script>

<style lang="css">
.swiper{
  position: relative;
  /*margin-top: 8.26rem;*/
}
.auto-img{
  height: 11.8rem;
}
.sub-img{
  width: 100%;
  height: 11.8rem;
}
.swiper-pagination{
  position: absolute;
  left: 0;
  bottom: 0.6rem;
  width: 100%;
  text-align: center;
}
.swiper-pagination .swiper-pagination-bullet{
  margin: 0 0.2rem;
  height: 0.4rem;
  width: 0.4rem;
}
</style>
