<template lang="html">
  <div class="login">
    <header class="login-head">
      <h1>
        账号
      </h1>
    </header>
    <div class="input">
      <input type="text" name="" value="" class="user-id" placeholder="账号">
      <input type="password" name="" value="" class="user-pass" placeholder="密码">
    </div>
    <div class="login-log" @click='setLoginInfo'>
      立即登录
    </div>
    <div class="login-tip" v-show='tipFlag'>
      {{tip}}
    </div>
    <Footer-view></Footer-view>
  </div>
</template>

<script>

import Footer from '@/components/footer'

let url = 'http://easy-mock.com/mock/5923ed6291470c0ac1f91a66/list/pass';

export default {
  data(){
    return {
      tip:'账号不存在',
      tipFlag:false
    }
  },
  components:{
    'Footer-view':Footer
  },
  methods:{
    setLoginInfo(){
      let id = document.querySelector('.user-id').value;
      let password = document.querySelector('.user-pass').value;
      let tip = document.querySelector('.login-tip');
      if(!id){
        tip.innerHTML = '账号不能为空'
        this.tipFlag = true;
        setTimeout(()=>{
          this.tipFlag = false;
        },1500)
      }else if(!password){
        tip.innerHTML = '密码不能为空'
        this.tipFlag = true;
        setTimeout(()=>{
          this.tipFlag = false;
        },1500)
      }else{
        this.$http.get(url).then((d)=>{
          let data = d.data.data;
          let arr = data.filter((item)=>{
            return item.id === id;
          })
          if(arr[0].password === password){
            sessionStorage.setItem('loginState',true);
            this.$store.commit('isUser',arr[0].name);
            this.$router.push({path:'/mine',replace:true});
          }else{
            tip.innerHTML = '账号密码不匹配'
            this.tipFlag = true;
            setTimeout(()=>{
              this.tipFlag = false;
            },1500)
          }
        })
      }
    }
  }
}
</script>

<style lang="css">
.login-head h1{
  background: #61c3db;
  height: 4.3rem;
  text-align: center;
  font: 1.6rem/4.3rem '微软雅黑';
  color: #fff;
}
.login-log{
  width: 29.8rem;
  height: 3.8rem;
  border: 0.1rem solid #c9cacb;
  font: 1.6rem/3.8rem '微软雅黑';
  text-align: center;
  color: #333;
  margin: 3rem auto 0;
  border-radius: 0.5rem;
}
.input{
  width: 28.9rem;
  margin: 6rem auto 0;
  height: 8.6rem;
}
.input input{
  border: none;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 4.3rem;
  box-sizing: border-box;
  border-bottom: 1px solid #d0d0d0;
  background: none;
  font: 1.6rem/4.3rem '微软雅黑';
}
.login-tip{
  width: 20rem;
  margin: 2rem auto;
  background: #40e3e3;
  font: 1.4rem/2.4rem '微软雅黑';
  color: #fff;
  text-align: center;
  border-radius: 1rem;
}
.outlogin{
  position: absolute;
  bottom: 10rem;
  background: #fff;
  font: 1.5rem/4.5rem '微软雅黑';
  color: red;
  text-align: center;
  width: 100%;
}
</style>
