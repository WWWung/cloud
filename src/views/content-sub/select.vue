<template lang="html">
  <div class="select">
    <header class="content-head">
      <h2 class="sub-title">
        <span>精选专栏</span>
      </h2>
    </header>
    <div class="select-content">
      <ul class="select-list">
        <li>
          <div class="select-text">
            <p class="select-text-floor1">
              <i>专栏</i>
              <span>《欢乐颂2》好听的歌绝不止《咖喱咖喱》</span>
            </p>
            <p class="select-text-floor2">
              <span>阅读</span>
              <span>13780</span>
            </p>
          </div>
          <div class="select-img">
            <img src="../../assets/imgs/28.png" alt="">
          </div>
        </li>
        <li>
          <div class="select-text">
            <p class="select-text-floor1">
              <i>专栏</i>
              <span>任外界如何评价朴树，《清白之年》仍是首杰作</span>
            </p>
            <p class="select-text-floor2">
              <span>阅读</span>
              <span>9274</span>
            </p>
          </div>
          <div class="select-img">
            <img src="../../assets/imgs/29.png" alt="">
          </div>
        </li>
        <li>
          <div class="select-text">
            <p class="select-text-floor1">
              <i>专栏</i>
              <span>就是这次演出，Michael Jackson迈着太空步登上舞台</span>
            </p>
            <p class="select-text-floor2">
              <span>阅读</span>
              <span>328</span>
            </p>
          </div>
          <div class="select-img">
            <img src="../../assets/imgs/30.png" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.select{
  padding: 0 1rem;
}
.select-list{
  border-top: 1px solid #e2e3e3;
}
.select-list li{
  height: 6.9rem;
  border-bottom: 1px solid #e2e3e3;
  display: flex;
}
.select-img{
  width: 15.5rem;
  height: 100%;
}
.select-img img{
  width: 100%;
  height: 100%;
}
.select-text{
  flex: 1;
}
.select-text-floor1{
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  vertical-align: middle;
  height: 4.2rem;
}
.select-text-floor1 i{
  padding: 0 0.2rem;
  display: inline-block;
  font: 0.8rem/1.2rem '微软雅黑';
  border: 1px solid #fe5253;
  color: #fe5253;
  font-style: normal;
  vertical-align: middle;
}
.select-text-floor1 span{
  font: 1.2rem/2.1rem '微软雅黑';
  color: #323232;
}
.select-text-floor2{
  font: 1.2rem/2rem '微软雅黑';
  color: #a1a1a2;
  margin-top: 0.2rem;
}
</style>
