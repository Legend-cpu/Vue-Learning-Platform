import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import { supabase } from '@/lib/supabaseClient'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true', //一开始没有存缓存的时候就需要和true比较判断一下
    localClassList: [], // 用于个人中心课程渲染的
    activatedTitle: '', //用于判断学习界面哪个标题被激活的
  },
  getters: {
  },
  mutations: {
    setLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn
      localStorage.setItem('isLoggedIn', isLoggedIn)
    },
    updateLocalList(state, courseName) {
      state.localClassList = state.localClassList.concat(courseName)
    },
    setLocalList(state, list) {
      state.localClassList = list
    },
    setActivatedTitle(state, title) {
      state.activatedTitle = title
    }
  },
  actions: {
    async logout({ commit, state }) {
      try {
        commit('setLoggedIn', false)
        state.localClassList = []
        router.push('/login');
        const { error } = await supabase.auth.signOut();
        if (error) {
          alert('注销失败： ', error.message);
        }
      } catch (error) {
        alert('注销失败：');
        console.log(error);
      }
    },
    async updateRemoteList({ state, commit }, courseName) {
      commit('updateLocalList', courseName)
      const { error } = await supabase.auth.updateUser({
        data: {
          classList: JSON.stringify(state.localClassList),
        }
      })
      if (error) {
        alert(error.message)
      }
    },
    async fetchClassList({ commit, state }) {
      try {
        if (state.isLoggedIn) {
          const { data: { user: { user_metadata: { classList } } } } = await supabase.auth.getUser();
          commit('setLocalList', JSON.parse(classList));
        }
      } catch (error) {
        console.error('Failed to fetch localClassList:', error);
      }
    }
  },
  modules: {
  }
})

export default store