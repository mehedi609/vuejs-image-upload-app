import { imgurApi } from '@/api/imgur';
import * as qs from 'qs';
import { router } from '@/main';

const state = {
  token: window.localStorage.getItem('imgur_token'),
};

const getters = {
  isLoggedIn: state => {
    return !!state.token;
  },
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};

const actions = {
  login() {
    imgurApi.login();
  },

  finalizeLogin({ commit }, hash) {
    const queryObj = qs.parse(hash.replace('#', ''));
    commit('setToken', queryObj.access_token);
    window.localStorage.setItem('imgur_token', queryObj.access_token);
    router.push('/');
  },

  logout: ({ commit }) => {
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
  },
};

export const auth = {
  state,
  getters,
  mutations,
  actions,
};
