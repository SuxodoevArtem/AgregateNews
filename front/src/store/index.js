import Vue from 'vue'
import Vuex from 'vuex'
import auth from "../store/auth"
import setting from '../store/setting'
import news from '../store/news'


Vue.use(Vuex);

export default new Vuex.Store({
   modules: {
      auth,
      setting,
      news 
   }
})