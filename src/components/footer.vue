<template lang="html">
  <div class="footer">
    <router-link to='/' class="foot-menu" tag='div'>
      <span class="foot-icon"></span>
      <span class="foot-text">发现音乐</span>
    </router-link>
    <!-- <div class="foot-menu">
      <span class="foot-icon"></span>
      <span class="foot-text">我的音乐</span>
    </div>
    <div class="foot-menu">
      <span class="foot-icon"></span>
      <span class="foot-text">朋友</span>
    </div> -->
    <router-link to='/mine' class="foot-menu" tag='div'>
      <span class="foot-icon"></span>
      <span class="foot-text">账号</span>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.footer{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4.9rem;
  background: #333;
  z-index: 999;
  display: flex;
  justify-content: space-around;
}
.foot-menu{
  width: 25%;
  height: 100%;
  font-size: 1.4rem;
  line-height: 1.7rem;
  color: #a7a7a7;
}
.foot-menu span{
  display: block;
  text-align: center;
}
.foot-icon{
  height: 2.5rem;
}
.foot-text{
  height: 1.7rem;
}
</style>
