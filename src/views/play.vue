<template lang="html">
  <div class="play">
    <header class="play-header">
      <div class="play-icon" @click='back'>
        返回
      </div>
      <div class="play-title">
        <h1 class="play-songName">
          <span>{{songInfo.name}}</span>
          <span>{{songInfo.album}}</span>
        </h1>
        <h2 class="play-albumName">
          <span>{{songInfo.singer}}</span>
        </h2>
      </div>
      <div class="play-icon">

      </div>
    </header>
    <div class="play-content">
      <div class="play-record">
        <div class="play-img">
          <img src="../assets/imgs/42.png" alt="">
        </div>
        <div class="play-pointer" :class='cls'>
          <img src="../assets/imgs/41.png" alt="">
        </div>

      </div>
      <div class="play-option">
        <div class="lyr">
          <p v-html='lyr' class="codeToString" v-show='false'></p>
          <ul>
            <li v-for='(key, i) in lyrArr' :class="{'active':key.dis}">{{key.txt}}</li>
          </ul>
        </div>
      </div>
      <div class="play-timer">
        <span class="start-time">{{nowTime}}</span>
        <div class="timer-line" @click='jump'>
          <div class="icon-wrap" :style="{'width': (currentTime / dur) * 100 + '%'}">
            <span class="current-icon">
              <span></span>
            </span>
          </div>
        </div>
        <span class="begin-time">{{endTime}}</span>
      </div>
      <div class="play-btns">
        <div class="play-icon"></div>
        <div class="play-sub">
          <span class="btn-prev" @click='prevSong'>上一首</span>
          <span class="btn-play" @click='playSong'>{{playInner}}</span>
          <span class="btn-next" @click='nextSong'>下一首</span>
        </div>
        <div class="play-icon"></div>
      </div>
    </div>
    <audio src="" autoplay=true id="audio" @ended='next()'></audio>
  </div>
</template>

<script>
let url = 'https://route.showapi.com/213-2?showapi_appid=39089&showapi_sign=9c2d8bdc239e4873b31063682f107cbf&musicid='

export default {
  data(){
    return {
      songInfo:{
        name:'海阔天空',
        album:'(死了都要爱)',
        singer:'信乐团'
      },
      playInner:'播放',
      songIndex:0,
      currentTime:0,
      nowTime:'00:00',
      endTime:'00:00',
      dur:0,
      timer:0,
      type:'order',
      cls:'playstatus',
      lyrArr:[],
      lyr:''
    }
  },
  mounted(){
    let audio = document.getElementById('audio');
    this.songIndex = this.$store.state.songIndex;
    this.getNowTime();
    this.playInfo();
    this.getEndTime();
  },
  beforeDestroy(){
    clearInterval(this.timer);
  },
  methods:{
    playSong(){
      let audio = document.getElementById('audio');
      if(audio.paused){
        this.play();
      }else{
        this.pause();
      }
    },
    play(){
      audio.play();
      this.getNowTime();
      this.cls = 'playstatus';
      this.playInner='暂停'
    },
    pause(){
      audio.pause();
      this.stop();
      // clearInterval(this.timer)
      this.cls = 'pausestatus';
      this.playInner='播放'
    },
    nextSong(){
      this.songIndex++;
      if(this.songIndex>=this.$store.state.songList.length){
        this.songIndex=0;
      }
      this.playInfo();
      this.getEndTime();
      this.getNowTime();
    },
    prevSong(){
      this.songIndex--;
      if(this.songIndex<0){
        this.songIndex=this.$store.state.songList.length-1;
      }
      this.playInfo();
      this.getEndTime();
      this.getNowTime();
    },
    playInfo(){
      if(!this.$store.state.songList[this.songIndex]) return;
      audio.src = this.$store.state.songList[this.songIndex].m4a;
      this.songInfo.name = this.$store.state.songList[this.songIndex].songname;
      this.songInfo.album = this.$store.state.songList[this.songIndex].albumname;
      this.songInfo.singer = this.$store.state.songList[this.songIndex].singername;
      this.getLyr(this.songIndex);
      this.getNowTime();
    },
    getEndTime(){
      let audio = document.getElementById('audio');
      let that = this;
      audio.onloadedmetadata = function(){
        that.dur = audio.duration;
        that.endTime = that.add0(Math.floor(that.dur/60))+':'+that.add0(that.dur%60);
      };
    },
    getNowTime(){
      let audio = document.getElementById('audio');
      if(!this.$store.state.songList[this.songIndex]) return;
      clearInterval(this.timer)
      this.timer = setInterval(()=>{
        console.log('正');
        this.currentTime = audio.currentTime;
        this.nowTime = this.add0(Math.floor(this.currentTime/60))+':'+this.add0(this.currentTime%60);
        this.updateLyr();
      },100)
    },
    stop(){
      clearInterval(this.timer);
    },
    next(){
      switch (this.type) {
        case 'order':
          this.songIndex++;
          this.songIndex = this.songIndex>=this.$store.state.songList.length?0:this.songIndex;
          this.playInfo();
          break;
        default:

      }
    },
    jump(e){
      if(e.target){
        let audio = document.getElementById('audio');
        let line = document.querySelector('.timer-line');
        let l = e.pageX - line.offsetLeft;
        let w = line.offsetWidth;
        audio.currentTime = ((l/w)*this.dur);
        if(audio.paused){
          this.play();
        }
      }
    },
    add0(num){
      num = Math.round(num);
      if(num<10){
        return '0'+num;
      }else{
        return ''+num;
      }
    },
    getLyr(){
      this.songInfo.songid = this.$store.state.songList[this.songIndex].songid;
      this.$http.get(url+this.songInfo.songid).then((d)=>{
        this.lyr = d.data.showapi_res_body.lyric;
        this.$nextTick(()=>{
          let lyrStr = document.querySelector('.codeToString').innerHTML;
          let arr = lyrStr.split('\n');
          let list = [];
          arr.forEach(function(item,index){
            let obj = {};
            item = item.replace(/(^\s*)|(\s*$)/g, '');
            obj.min = ~~(item.substring(1, 3))
            obj.sec = ~~(item.substring(4, 6))
            obj.ms = ~~(item.substring(7, 9))
            obj.txt = item.substring(10, item.length)
            obj.txt = obj.txt.replace(/(^\s*)|(\s*$)/g, '')
            obj.dis = false
            obj.total = obj.min * 60 + obj.sec + obj.ms / 100
            if (obj.txt.length > 0) {
              list.push(obj)
            }
          })
          list.push({min: 999, sec: 999, ms: 999, total: 999, txt: ''});
          this.lyrArr = list.slice(0);
        })
      }).catch((error)=>{
        console.log(error);
      })
    },
    updateLyr(){
      if(this.lyrArr.length<1) return
      let i = 0;
      let loading = true;
      this.lyrArr.forEach((item,index)=>{
        item.dis = false;
        if(item.total-this.currentTime>0 && loading){
          i = index-1;
          i = i > 0?i:0;
          loading=false;
        }else{
          item.dis = false;
        }
      })
      this.lyrArr[i].dis = true;
      let now = i - 1>0?i-1:0;
      document.querySelector('.play-option ul').style.top = '-'+2.4*now + 'rem';
    },
    back(){
      let audio = document.getElementById('audio');
      audio.pause();
      this.stop();
      this.$router.push({path:'/',replace:true});
    }
  }
}
</script>

<style lang="css">
.play{
  height: 100%;
  background-image:linear-gradient(135deg, #040403 0%, #232e3a 40%, #263f60 60%, #363b46 90%, #5b5c64 100%);
}
.play-header{
  height: 4.5rem;
  box-sizing: border-box;
  border-bottom: 1px solid #313231;
  display: flex;
}
.play-icon{
  width: 6.3rem;
  font: 1.5rem/4.5rem '微软雅黑';
  text-align: center;
  color: #fff;
}
.play-title{
  flex: 1;
  color: #fff;
  overflow: hidden;
  text-align: center;
  margin-top: 0.5rem;
}
.play-songName{
  font: 1.5rem/2.1rem '微软雅黑';
  white-space: nowrap;
}
.play-albumName{
  font: 1.2rem/2.1rem '微软雅黑';
  white-space: nowrap;
}
.play-record{
  height: 32.5rem;
  position: relative;
  overflow: hidden;
}
.play-img{
  width: 30rem;
  height: 30rem;
  margin: 4.5rem auto 0;
}
.play-img img, .play-pointer img{
  width: 100%;
  height: 100%;
}
.play-pointer{
  position: absolute;
  top: 0;
  left: 14.5rem;
  width: 8rem;
  height: 11.9rem;
  transform-origin: 1.65rem 0;
  transform: rotate(0);
}
.pausestatus{
  animation: 1s playpointer forwards;
}
.playstatus{
  animation: 1s pausepointer forwards;
}
.play-option{
  height: 7.6rem;
  overflow: hidden;
  position: relative;
}
.play-option ul{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: all .5s linear;
}
.play-option li{
  text-align: center;
  font: 1.2rem/2.4rem '微软雅黑';
  color: #fff;
  opacity: .4;
}
.play-option .active{
  opacity: 1;
}
.play-timer{
  height: 1.6rem;
  padding: 0 1.2rem;
  display: flex;
  font: 1rem/1.6rem '微软雅黑';
  color: #d5d8dc;
  justify-content: space-between;
}
.timer-line{
  width: 21.2rem;
  height: 0.2rem;
  background: #3a4758;
  margin-top: 0.7rem;
  position: relative;
  z-index: 15;
}
.current-icon{
  position: absolute;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.8rem;
  background: #fff;
  top: -0.7rem;
  right: -0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}
.current-icon span{
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 0.2rem;
  background: red;
}
.play-btns{
  padding-top: 2rem;
  display: flex;
}
.play-sub{
  flex: 1;
  display: flex;
  justify-content: space-between;
  font: 2rem/4.5rem '微软雅黑';
  color: #fff;
}
.icon-wrap{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 10;
}
@keyframes playpointer {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(-25deg);
    }
}
@keyframes pausepointer {
    from {
      transform: rotate(-25deg);
    }
    to {
      transform: rotate(0);
    }
}
</style>
