import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    commentdate:new Date(),
    commentyear:new Date().getFullYear(),
    commentmonth:new Date().getMonth(),
    commentday:new Date().getDay(),
    yearstr: new Date().getFullYear(),
    monthstr: new Date().getMonth(),
    num:0,
    ymd:0,
    tempyear:0,
    tempmonth:0,
  },
  mutations: {
    newday(state,dis){
      if(dis){
        state.num+=1;
      }
      else if(dis==10){
        state.num-=1;
      }
      else{
        state.num-=1;
      }
      state.commentdate.setFullYear(state.commentyear, state.commentmonth+state.num, 1);
      state.yearstr=state.commentdate.getFullYear().toString()
      state.monthstr=state.commentdate.getMonth().toString()
    },
    tonowdate(state){
      state.commentyear=new Date().getFullYear(),
      state.commentmonth=new Date().getMonth(),
      state.commentdate.setFullYear(state.commentyear, state.commentmonth, 1);
      state.num=0;
      state.yearstr=state.commentdate.getFullYear().toString()
      state.monthstr=state.commentdate.getMonth().toString()
    },
    choseday(state){
      state.commentdate.setFullYear(state.tempyear, state.tempmonth-1, 1);      
      state.num=(state.tempyear-state.commentyear)*12+state.tempmonth*1-state.commentmonth-1;
      console.log(state.tempyear,state.commentyear,state.num)
      console.log((state.tempyear-state.commentyear)*12,state.num)
      state.yearstr=state.commentdate.getFullYear().toString()
      state.monthstr=state.commentdate.getMonth().toString()
    },
    changeymd(state){
      state.ymd<2?state.ymd++:state.ymd=0;
    },
    changetempyear(state,val){
      state.tempyear=val;
    },
    changetempmonth(state,val){
      state.tempmonth=val;
    }
  },
  actions: {
    changemonth(state,dis){
      state.commit('newday',dis)
    }
  }
})
