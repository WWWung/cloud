<template lang="html">
  <div class="content-banner">
    <div class="content-banner-sub">
      <dl>
        <dt></dt>
        <dd>私人FM</dd>
      </dl>
    </div>
    <div class="content-banner-sub">
      <dl>
        <dt></dt>
        <dd>每日歌曲推荐</dd>
      </dl>
    </div>
    <div class="content-banner-sub">
      <dl>
        <dt></dt>
        <dd>云音乐热搜榜</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .content-banner{
    height: 10rem;
    box-sizing: border-box;
    border-bottom: 1px solid #e1e2e3;
    display: flex;
    flex-direction: row;
  }
  .content-banner-sub{
    width: 33%;
    height: 100%
  }
  .content-banner-sub dt{
    margin: 1.5rem auto 0;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 2.4rem;
    border: 0.1rem solid #61c3dc
  }
  .content-banner-sub dd{
    font: 1.1rem/2.7rem '微软雅黑';
    color: #333;
    text-align: center;
  }
</style>
