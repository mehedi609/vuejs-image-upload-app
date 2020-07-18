import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from '@/store/modules/auth';
import { image } from '@/store/modules/images';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { auth, image },
});
