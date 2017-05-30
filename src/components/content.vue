<template lang="html">
  <div class="wrapper">
    <div class="content">
      <AutoSwiper/>
      <Banner/>
      <Recommend/>
      <Sole/>
      <Latest/>
      <MV/>
      <Select-view></Select-view>
      <Radio/>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import AutoSwiper from '@/views/content-sub/swiper'
import Banner from '@/views/content-sub/banner'
import Recommend from '@/views/content-sub/recommend'
import Sole from '@/views/content-sub/sole'
import Latest from '@/views/content-sub/latest'
import MV from '@/views/content-sub/mv'
import Select from '@/views/content-sub/select'
import Radio from '@/views/content-sub/radio'


export default {
  components:{
    Banner,
    AutoSwiper,
    Recommend,
    Sole,
    Latest,
    MV,
    'Select-view':Select,
    Radio
  },
  mounted(){
    this.$nextTick(()=>{
      let wrapper = document.querySelector('.wrapper');
      let content = document.querySelector('.content');
      scroll = new BScroll(wrapper,{
        startX: 0,
        startY: 0,
        probeType: 3
      })
      scroll.on('scroll',(pos)=>{
      })
    })
  }
}
</script>

<style lang="css">
  .wrapper, .mm-wrapper{
    position: absolute;
    left: 0;
    right: 0;
    top: 8.25rem;
    bottom: 4.9rem;
    height: auto;
  }
</style>
