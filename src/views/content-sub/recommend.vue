<template lang="html">
  <div class="reconmmend type1">
    <header class="content-head">
      <h2 class="sub-title">
        <span>推荐歌单</span>
      </h2>
    </header>
    <div class="type1-content">
      <ul class="type1-list clearfix">
        <li>
          <a href="javascript:;" class="type1-img">
            <img src="../../assets/imgs/9.png" alt="">
          </a>
          <p class="type1-text">
            『女歌男唱』在心中交响在心中回荡
          </p>
        </li>
        <li>
          <a href="javascript:;" class="type1-img">
            <img src="../../assets/imgs/10.png" alt="">
          </a>
          <p class="type1-text">
            『C-Indie』当华语小众遇上独立之声
          </p>
        </li>
        <li>
          <a href="javascript:;" class="type1-img">
            <img src="../../assets/imgs/11.png" alt="">
          </a>
          <p class="type1-text">
            粤语情歌（个人口味）
          </p>
        </li>
        <li>
          <a href="javascript:;" class="type1-img">
            <img src="../../assets/imgs/12.png" alt="">
          </a>
          <p class="type1-text">
            八大改行 - 郭德纲、张文顺
          </p>
        </li>
        <li>
          <a href="javascript:;" class="type1-img">
            <img src="../../assets/imgs/13.png" alt="">
          </a>
          <p class="type1-text">
            中国制燥你摇我啊[民谣&摇滚老炮]
          </p>
        </li>
        <li>
          <a href="javascript:;" class="type1-img">
            <img src="../../assets/imgs/14.png" alt="">
          </a>
          <p class="type1-text">
            【北美】VOL.29 留学要警惕，抑郁症离你一点都不远
          </p>
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
.type1{
  padding: 0 1rem;
}
.content-head{
  padding-top: 1rem;
  height: 3.6rem;
}
.sub-title{
  font: 1.6rem/3.6rem '微软雅黑';
}
.type1-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.type1-list li{
  width: 9.5rem;
  height: 14.9rem;
}
.type1-img{
  display: block;
  height: 9.5rem;
}
.type1-img img{
  width: 100%;
  height: 100%;
}
.type1-text{
  width: 100%;
  height: 3rem;
  font: 1.2rem/1.5rem '微软雅黑';
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  margin-top: 0.7rem;
}
</style>
