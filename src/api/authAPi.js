import { URL_LOGIN } from 'shared/constant/endpoints';
import axiosClient from './axiosClient';

const authApi = {
  login: (data) => {
    return axiosClient.post(URL_LOGIN, data);
  },
};

export default authApi;
