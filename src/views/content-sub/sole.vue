<template lang="html">
  <div class="sole">
    <div class="sole-floor1">
      <header class="content-head">
        <h2 class="sub-title">
          <span>独家放送</span>
        </h2>
      </header>
      <ul class="sole-list">
        <li>
          <a href="javascript:;" class="sole-img">
            <img src="../../assets/imgs/15.png" alt="">
          </a>
          <p class="type1-text">
            音乐后现场 第48期 陈粒： 就让我肆意的生活
          </p>
        </li>
        <li>
          <a href="javascript:;" class="sole-img">
            <img src="../../assets/imgs/16.png" alt="">
          </a>
          <p class="type1-text">
            独家专访Charli XCX： 不为讨好你们而性感
          </p>
        </li>
      </ul>
    </div>
    <div class="sole-floor2">
      <div class="sole-main">
        <a href="javascript:;" class="sole-main-img">
          <img src="../../assets/imgs/17.png" alt="">
        </a>
        <p class="type1-text">
          独家专访 薛之谦： 做音乐做到神经质
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .sole{
    padding: 0 1rem;
  }
  .sole-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px solid #e1e2e3;
  }
  .sole-list li{
    height: 12.8rem;
    width: 14.6rem;
  }
  .sole-img{
    display: block;
    height: 8.2rem;
  }
  .sole-img img{
    width: 100%;
    height: 100%;
  }
  .sole-floor2{
    margin-top: 0.95rem;
  }
  .sole-main-img{
    display: block;
    width: 30rem;
    height: 11.1rem;
  }
  .sole-main-img img{
    width: 100%;
    height: 100%;
  }
</style>
