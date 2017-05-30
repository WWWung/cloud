<template lang="html">
  <div class="user">
    <header class="user-head">
      <h1>
        账号
      </h1>
    </header>
    <div class="user-info">
      <div class="user-img">
        <a href="javascript:;">
          <img src="../assets/imgs/40.png" alt="">
        </a>
      </div>
      <div class="user-text">
        <p class="user-name">
          {{user}}
        </p>
        <p class="user-lv">lv.4</p>
      </div>
    </div>
    <div class="outlogin" @click='out'>
      退出登陆
    </div>
    <Footer-view></Footer-view>
  </div>
</template>

<script>
import Footer from '@/components/footer'
export default {
  computed:{
    user(){
      return this.$store.state.user;
    }
  },
  methods:{
    out(){
      sessionStorage.setItem('loginState',false);
      this.$router.push({path:'/login',replace:true});
    }
  },
  components:{
    'Footer-view':Footer
  }
}
</script>

<style lang="css">
.user-head h1{
  background: #61c3db;
  height: 4.3rem;
  text-align: center;
  font: 1.6rem/4.3rem '微软雅黑';
  color: #fff;
}
.user-info{
  height: 7.8rem;
  padding: 1.5rem 0 0 1.5rem;
  border-bottom: 1px solid #e2e3e3;
  display: flex;
}
.user-img{
  width: 6rem;
  height: 6rem;
  border-radius: 3rem;
  overflow: hidden;
  margin-right: 1rem;
}
.user-img img{
  width: 100%;
  height: 100%;
}
.user-text{
  flex: 1;
}
.user-name{
  font: 1.6rem/3.4rem '微软雅黑';
  color: #323232;
}
.user-lv{
  display: inline-block;
  font: 1rem/1.4rem '微软雅黑';
  padding: 0 0.6rem;
  border: 0.1rem solid #bfbfbf;
  border-radius: 0.6rem;
  color: #999999;
  font-weight: bold;
}
</style>
