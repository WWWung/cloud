import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  user:'',
  songInfo:{},
  songList:[],
  songIndex:0
}
const mutations = {
  isUser(state,user){
    state.user = user
  },
  isSong(state,obj){
    state.songInfo.src = obj.m4a;
    state.songInfo.albumname = obj.albumname;
    state.songInfo.singername = obj.singername;
    state.songInfo.songname = obj.songname;
    state.songInfo.songid = obj.songid;
  },
  isSongList(state,arr){
    state.songList = arr.slice(0);
  },
  isSongIndex(state,index){
    state.songIndex = index;
  }
}
export default new Vuex.Store({
  state,
  mutations
})
