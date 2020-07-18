import qs from 'qs';
import { config } from '@/config/config';
import axios from 'axios';

export const imgurApi = {
  login() {
    const queryString = {
      client_id: config.CLIENT_ID,
      response_type: 'token',
    };

    window.location = `${config.ROOT_URL}/oauth2/authorize?${qs.stringify(
      queryString,
    )}`;
  },

  fetchImages(token) {
    return axios.get(`${config.ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
