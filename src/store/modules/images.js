import { imgurApi } from '@/api/imgur';

export const image = {
  state: {
    images: [],
  },

  getters: {
    allImages: state => state.images,
  },

  mutations: {
    setImages(state, images) {
      state.images = images;
    },
  },

  actions: {
    async fetchImages({ rootState }) {
      const { token } = rootState.auth;
      const response = await imgurApi.fetchImages(token);
      console.log(response);
    },
  },
};
