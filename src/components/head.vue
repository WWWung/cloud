<template lang="html">
  <header class="page-head">
    <div class="page-search">
      <span class="icon-mc"></span>
      <router-link to='/search' class="search" tag='p'>
        <span>搜索音乐、歌词、电台</span>
      </router-link>
      <span class="icon-player"></span>
    </div>
    <!-- <div class="head-menu">
      <div class="head-sub">
        <span>
          个性推荐
        </span>
        <i class="head-line"></i>
      </div>
      <div class="head-sub">
        <span>
          歌单
        </span>
        <i class="head-line"></i>
      </div>
      <div class="head-sub">
        <span>
          主播电台
        </span>
        <i class="head-line"></i>
      </div>
      <div class="head-sub">
        <span>
          排行榜
        </span>
        <i class="head-line"></i>
      </div>
    </div> -->
  </header>
</template>

<script>
export default {
  methods:{
  }
}
</script>

<style lang="css">

body, html{
  height: 100%;
  overflow: hidden;
}
.page-head{
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
}
.page-search{
  height: 3rem;
  padding: 0.65rem 0;
  background: #61c3db;
  display: flex;
  border-bottom: 1px solid #57afc5;
}
.icon-mc, .icon-player{
  width: 5.4rem;
  height: 100%;
}
.page-search .search{
  flex: 1;
  height: 3rem;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 0.6rem;
  font: 1.4rem/3rem 'Avenir', Helvetica, Arial, sans-serif;
  text-indent: 1.8rem;
  background: #fff;
  color: #999;
}
.head-menu{
  height: 3.95rem;
  background: #f9f9f9;
  border-bottom: 1px solid #dfdfe0;
  padding: 0 0.45rem;
  display: flex;
  justify-content: space-between;
}
.head-menu .head-sub{
  width: 7rem;
  text-align: center;
  position: relative;
  font: 1.4rem/3.95rem '微软雅黑';
  color: #333;
}
.head-menu .head-line{
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 0.2rem;
  background: #5fc2db;
  display: none;
}
</style>
