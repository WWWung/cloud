<template lang="html">
  <div class="mm-wrapper">
    <div class="music-menu">
      <header class="music-menu-head">
        <div class="mm-head-img">
          <img src="../assets/imgs/37.png" alt="">
        </div>
        <div class="mm-head-text">
          <h1>
            <span>
              精品歌单
            </span>
          </h1>
          <h2>
            45度角仰望天空才是听歌的正确姿势
          </h2>
          <p>
            夏天来了，是时候听热情又青春的流行朋克啦
          </p>
        </div>
      </header>
      <div class="mm-option">
        <div class="mm-option-title">
          <span>
            全部歌单
          </span>
          <i>
            >
          </i>
        </div>
        <div class="mm-optin-content">
          <span>欧美</span>
          <i></i>
          <span>民谣</span>
          <i></i>
          <span>电子</span>
        </div>
      </div>
      <div class="mm-main">
        <ul class="mm-list">
          <li v-for='item in list'>
            <a href="javascript:;" class="mm-list-img">
              <img src="../assets/imgs/39.png" alt="">
            </a>
            <p class="type1-text">
              粤语|有些人会教你听懂所有的情歌
            </p>
          </li>
          <!-- <li>
            <a href="javascript:;" class="mm-list-img">
              <img src="../assets/imgs/39.png" alt="">
            </a>
            <p class="type1-text">
              粤语|有些人会教你听懂所有的情歌
            </p>
          </li>
          <li>
            <a href="javascript:;" class="mm-list-img">
              <img src="../assets/imgs/39.png" alt="">
            </a>
            <p class="type1-text">
              粤语|有些人会教你听懂所有的情歌
            </p>
          </li>
          <li>
            <a href="javascript:;" class="mm-list-img">
              <img src="../assets/imgs/39.png" alt="">
            </a>
            <p class="type1-text">
              粤语|有些人会教你听懂所有的情歌
            </p>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
let url = 'http://easy-mock.com/mock/5923ed6291470c0ac1f91a66/list/list';
export default {
  data(){
    return {
      list:[]
    }
  },
  mounted(){
    let scroll = null;
    setTimeout(()=>{
      this.$http.get(url).then((d)=>{
        this.list = d.data.data;
        this.$nextTick(function(){
          scroll.refresh();
        })
      })
    })
    this.$nextTick(()=>{
      let mM = document.querySelector('.music-menu');
      let mWrapper = document.querySelector('.mm-wrapper');
      scroll = new BScroll(mWrapper,{
        startX: 0,
        startY: 0,
        probeType: 3
      })
      var status = true;
      scroll.on('scroll',(pos)=>{
        if(pos.y<0){
          let max = mM.offsetHeight - mWrapper.offsetHeight;
          if(max - (-pos.y) <= 50 && status){
            setTimeout(()=>{
              this.$http.get(url).then((d)=>{
                this.list.push(...d.data.data)
                this.$nextTick(function () {
                  scroll.refresh();
                  status = true;
                })
              })
            },500)
            status = false;
          }
        }
      })
    })
  }
}
</script>

<style lang="css">
/*.music-menu{
  position: absolute;
  width: 100%;
  top: 8.25rem;
}*/
.music-menu-head{
  padding: 1.4rem 1rem 0;
  height: 11rem;
  background-image: linear-gradient(
    to left,
    rgba(157, 157, 157, 0.8) 0%,
    rgba(140, 132, 112, 0.8) 33.3%,
    rgba(145, 136, 116, 0.8) 66.6%,
    rgba(153, 153, 153, 0.8) 100%
    );
  display: flex;
  justify-content: space-between;
}
.mm-head-img{
  width: 10rem;
  height: 10rem;
}
.mm-head-img img{
  width: 100%;
  height: 100%;
}
.mm-head-text{
  width: 19rem;
}
.mm-head-text h1{
  font: 1.9rem/3.4rem '微软雅黑';
  color: #fff;
  font-weight: normal;
}
.mm-head-text h2{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font: 1.5rem/3rem '微软雅黑';
  color: #fff;
}
.mm-head-text p{
  font: 1.1rem/1.4rem '微软雅黑';
  color: #d2c4b7;
}
.mm-option{
  padding: 2rem 0;
  height: 3rem;
}
.mm-option-title{
  float: left;
  width: 10.4rem;
  height: 2.8rem;
  border: 0.1rem solid #cbcccd;
  border-radius: 1.4rem;
  text-align: center;
  margin-left: 1rem;
}
.mm-option-title span{
  display: inline-block;
  font: 1.4rem/2.8rem '微软雅黑';
  color: #323233;
}
.mm-option-title i{
  display: inline-block;
  font-style: normal;
  font: 1.4rem/2.8rem 'MWF-MDL2';
  color: #cbcccd;
  margin-left: 0.5rem;
}
.mm-optin-content{
  float: right;
  display: flex;
  align-items: center;
}
.mm-optin-content span{
  font: 1.4rem/3rem '微软雅黑';
  color: #646566;
  padding: 0 1rem;
}
.mm-optin-content i{
  height: 1.4rem;
  width: 1px;
  background: #ccc;
}
.mm-list{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.mm-list li{
  width: 15.8rem;
  height: 21.6rem;
}
.mm-list-img{
  display: block;
  height: 15.8rem;
}
.mm-list-img img{
  width: 100%;
  height: 100%;
}
</style>
