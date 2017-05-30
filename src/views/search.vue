<template lang="html">
  <div class="search-main">
    <div class="search-warp">
      <input type="text" name="" value="" autofocus="autofocus">
      <router-link tag='span' to='/'>
        取消
      </router-link>
      <span @click='searchMusic'>确定</span>
    </div>
    <div class="search-content">
      <div class="search-list" >
        <ul class="" >
          <li v-for='(item, index) in songList' @click='clickToPlay(index)'>
            <p class="song-name">
              {{item.songname}}
            </p>
            <p class="song-info">
              <span class="singer-name">{{item.singername}}</span>
              <i v-show='item.albumname'>-</i>
              <span class="album-name">{{item.albumname}}</span>
            </p>
          </li>
        </ul>
        <!-- <div class="song-loading-icon">
          <svg id='svg'>
            <path class="ring" fill="none" stroke="#fd30ae" stroke-width='0.3rem'/>
            <path class="ring" fill="none" stroke="#fd30ae" stroke-width='0.3rem'/>
            <path class="ring" fill="none" stroke="#fd30ae" stroke-width='0.3rem'/>
          </svg>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {fetch} from '../api'
let start = 0;
let count = 20;
let url = 'http://route.showapi.com/213-1?showapi_appid=39089&showapi_sign=9c2d8bdc239e4873b31063682f107cbf&keyword=';
var status = true;
export default {
  name: 'Search',
  data(){
    return{
      songList:[],
      page:1,
      str:'',
      status:true
    }
  },
  methods:{
    searchMusic(){
      this.str = document.querySelector('.search-warp input').value;
      this.$http.get(url+this.str+'&page='+this.page).then((d)=>{
        this.songList = d.data.showapi_res_body.pagebean.contentlist;
        console.log(d.data);
        this.$nextTick(()=>{
            scroll.refresh();
        })
      })
    },
    clickToPlay(index){
      this.$store.commit('isSongList',this.songList);
      this.$store.commit('isSongIndex',index);
      this.$router.push({path:'/play'});
    }
  },
  mounted(){
    this.$nextTick(()=>{
      // let svg = document.getElementById('svg');
      // let ring = document.querySelectorAll('.ring');
      // let w = Number.parseInt(getComputedStyle(svg).width);
      // let h = Number.parseInt(getComputedStyle(svg).height);
      // ring[0].setAttribute('d', ['M', w/10, 0, 'L', w/10, h].join(' '));
      // ring[1].setAttribute('d',['M',w/3+w/10,h/10,'L',w/3+w/10,9*h/10].join(' '));
      // ring[2].setAttribute('d', ['M',2*w/3+w/10,0,'L',2*w/3+w/10,h].join(' '));

      let wrapper = document.querySelector('.search-content');
      let content = document.querySelector('.search-list');
      scroll = new BScroll(wrapper,{
        startX: 0,
        startY: 0,
        probeType: 3,
        preventDefault:false
      })
      scroll.on('scroll',(pos)=>{
        if(pos.y<0){
          let max = content.offsetHeight - wrapper.offsetHeight;
          if(max - (-pos.y) <= 50 && status){
            setTimeout(()=>{
              this.$http.get(url+this.str+(++this.page)).then((d)=>{
                this.songList.push(...d.data.showapi_res_body.pagebean.contentlist)
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
.fill{
  stroke-dasharray:275;
  stroke-dashoffset:278;
  animation: dash 1s infinite linear;
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
#svg{
  display: block;
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
}
.search-main{
  /*height: 10rem;
  background: red;*/
}
.search-warp{
  position: relative;
  z-index: 999;
  height: 3rem;
  padding: 0.65rem 0 0.65rem 1rem;
  background: #61c3db;
}
.search-warp input{
  display: inline-block;
  width: 22.8rem;
  height: 3rem;
  border-radius: 1.3rem;
  font: 1.3rem/3rem '微软雅黑';
  color: #333;
  text-indent: 2.8rem;
}
.search-warp span{
  display: inline-block;
  font: 1.6rem/3rem '微软雅黑';
  color: #fff;
}
.search-content{
  position: absolute;
  left: 0;
  right: 0;
  top: 4.3rem;
  bottom: 0;
  height: auto;
}
.search-list ul{
  padding-left: 1rem;
}
.search-list li{
  height: 5.45rem;
  border-bottom: 1px solid #c8c8c8;
}
.song-name{
  font: 1.6rem/2.3rem '微软雅黑';
  margin-top: 0.7rem;
  color: #507daf;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.song-info{
  font: 1.2rem/1.9rem '微软雅黑';
  margin-top: 0.2rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.singer-name, .song-info i{
  color: #a5a6a8;
}
.album-name{
  color: ##507daf;
}
</style>
