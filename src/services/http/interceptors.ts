import axios from 'axios';
import { REFRESH_TOKEN_HEADER } from '../../constants/auth';
import { RESPONSE_TYPES, STATUS_CODES } from '../../constants/response-types';
import { LocalStorageService } from '../local-storage';

const localStorageService = new LocalStorageService();
axios.interceptors.request.use(
  async function (req) {
    return req;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (response.headers[REFRESH_TOKEN_HEADER]) {
      // TODO: dispatch to set user token
    }

    return response;
  },
  async (error) => {
    if (
      axios.isCancel(error) ||
      error?.message === RESPONSE_TYPES.NETWORK_ERROR ||
      error?.response?.status === 408 ||
      error?.code === 'ECONNABORTED'
    ) {
      return Promise.reject({ noInternet: true });
    }

    if (error?.response?.status === STATUS_CODES.UNAUTHORIZED) {
      await localStorageService.remove('token');
    }

    return Promise.reject(error);
  }
);
